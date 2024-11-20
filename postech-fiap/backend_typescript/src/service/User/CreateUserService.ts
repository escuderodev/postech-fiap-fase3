import { Request, Response } from "express"
import { UserRepositoryInMongoDB } from "../../database/repository/UserRepositoryInMongoDB"
import bcrypt from "bcrypt"

export class CreateUserService  {

    constructor(readonly repository: UserRepositoryInMongoDB) {
    }

    async execute(req: Request, res: Response) {

        const { name, email, password, confirmPassword} = req.body

        // validations
    
        // check requireds fields
        if(!name) {
            return res.status(422).json({message: 'name field is required!'})
        }
        if(!email) {
            return res.status(422).json({message: 'email field is required!'})
        }
        if(!password) {
            return res.status(422).json({message: 'password field is required!'})
        }
        if(password !== confirmPassword) {
            return res.status(422).json({message: 'password and confirmPassword are not the same!'})
        }
    
        // check if users not exists
        const userExists = await this.repository.getByEmail(email)

        if(userExists) {
            return res.status(422).json({message: "mail already registered!"})
        }
    
        // create password encoded
        const salt = await bcrypt.genSalt(12) //add dificult
        const passwordHash = await bcrypt.hash(password, salt) //create password encoded
        return this.repository.save(req, passwordHash)

    }
}