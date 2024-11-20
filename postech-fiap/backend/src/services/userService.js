import { user } from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export class UserService {

    static async userList() {
        try {
            return await user.find({});
        } catch (error) {
            return { message: `failed to get all users - ${error.message}` };
        }
    };

    static async getUserById(id) {
        try {
            const userSearch = await user.findById(id);
            if (userSearch) {
                return userSearch;
            } else {
                return { message: "user not found!" };
            }
        } catch (error) {
            return { message: `failed to get user by id - ${error.message}` };
        }
    };

    static async userCreate(req) {
        try {
            const { name, email, password, confirmPassword } = req.body;

            // check requireds fields
            if (!name) {
                return 'name field is required!';
            }
            if (!email) {
                return 'email field is required!';
            }
            if (!password) {
                return 'password field is required!';
            }
            if (password !== confirmPassword) {
                return 'password and confirmPassword are not the same!';
            }

            // check if users not exists
            const userExists = await user.findOne({email})

            if (userExists) {
                return "mail already registered!";
            }

            // create password encoded
            const salt = await bcrypt.genSalt(12) //add dificult
            const passwordHash = await bcrypt.hash(password, salt) //create password encoded

            const newUser = {
                name: name,
                email: email,
                password: passwordHash
            }

            await user.create(newUser);
            return {
                message: "user created!",
            };
        } catch (error) {
            return {
                message: "failed to create user!",
                erro: error.message
            };
        }
    };

    static async userUpdate(req, passwordHash) {
        const id = req.params.id;
        const { name, email } = req.body;

        try {
            const userSearch = await user.findById(id);

            if (userSearch) {
                const userUpdated = {
                    id: id,
                    name: name,
                    email: email,
                    password: passwordHash,
                    updatedAt: Date.now()
                }

                await user.findByIdAndUpdate(id, userUpdated);
                return "user updated!";
            } else {
                return "user not found!";
            }
        } catch (error) {
            return { message: `failed to update user - ${error.message}` };
        }
    };

    static async userDelete(id) {
        try {
            const userSearch = await user.findById(id);
            if (userSearch) {
                await user.findByIdAndDelete(id);
                return "user deleted!";
            } else {
                return "user not found!";
            }
        } catch (error) {
            return { message: `failed to delete user - ${error.message}` };
        }
    };

    static async login(req, res) {
        const { email, password } = req.body;

        // check if users not exists
        const userExists = await user.findOne({email}).select('+password');

        // check if users not exists
        if (!userExists) {
            return res.status(422).json({ message: "e-mail is not valid!" })
        }

        // check if password is valid
        const checkPassword = await bcrypt.compare(password, userExists.password)
        if (!checkPassword) {
            throw new Error("password is not valid!");
        }

        //user authentication
        const secret = process.env.SECRET
        const token = jwt.sign({ id: userExists.id }, secret ?? '', { expiresIn: '1h' })
        return {
            userId: userExists.id,
            token: token
        }
    };

    static async checkToken(req, res, next) {
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
    };

    getUserIdFromToken(authorization) {

        const secret = process.env.SECRET;

        if (!secret) {
          throw new Error('SECRET environment variable is not set');
        }

        if (!authorization.startsWith('Bearer ')) {
            throw new Error('Invalid authorization header format');
        }

        const token = authorization.slice(7); // Remove "Bearer " do início do cabeçalho

        try {
          const decoded = jwt.verify(token, secret);
          const userId = decoded.id;
          return userId; // Retorne o ID do usuário se necessário
        } catch (err) {
          console.error('Token is not valid:', (err).message);
          return null; // Ou lidar com o erro de outra forma
        }
    };
};