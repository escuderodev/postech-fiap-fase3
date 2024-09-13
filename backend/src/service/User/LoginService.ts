import { Request, Response } from "express"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import "dotenv/config"
import { UserRepositoryInMongoDB } from "../../database/repository/UserRepositoryInMongoDB"

interface TokenPayload {
    id: string
}

export class LoginService {

    async execute(req: Request, res: Response) {

        const userRepository = new UserRepositoryInMongoDB()
        const { email, password } = req.body

        // check if users not exists
        const user = await userRepository.getByEmail(email)
        if(!user) {
            return res.status(422).json({message: "e-mail is not valid!"})
        }

        // check if password is valid
        const checkPassword = await bcrypt.compare(password, user.password)
        if(!checkPassword) {
            throw new Error("password is not valid!");
        }
    
        //user authentication
        const secret = process.env.SECRET
        const token = jwt.sign({id: user.id}, secret ?? '', {expiresIn: '1h'})
        return {
            userId: user.id,
            token: token
        }
    }

    async checkToken(req: Request, res: Response, next: Function) {
        const tokenHeader = req.headers['authorization']
        const token = tokenHeader && tokenHeader.split(" ")[1]
    
        if(!token) {
            return res.status(401).json({message: "Access denied!"})
        }
    
        try {
            const secret = process.env.SECRET
            jwt.verify(token, secret ?? '')
            next()
        } catch (error) {
            res.status(400).json({message: "Token is not valid!"})
        }
    }

    getUserIdFromToken(authorization: string) {

        const secret = process.env.SECRET;

        if (!secret) {
          throw new Error('SECRET environment variable is not set');
        }

        if (!authorization.startsWith('Bearer ')) {
            throw new Error('Invalid authorization header format');
        }

        const token = authorization.slice(7); // Remove "Bearer " do início do cabeçalho

        try {
          const decoded = jwt.verify(token, secret) as { id: string }; // Adicionando a tipagem para `decoded`
          const userId = decoded.id;
          return userId; // Retorne o ID do usuário se necessário
        } catch (err) {
          console.error('Token inválido:', (err as Error).message);
          return null; // Ou lidar com o erro de outra forma
        }
    }
}