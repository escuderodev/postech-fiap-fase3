import { Request } from "express"
import User from "../../model/user/User"
import { UserRepository } from "../../controller/User/repository/UserRepository"

export class UserRepositoryInMongoDB implements UserRepository {
    
    async save(req: Request, passwordHash: string) {
        
        const { name, email } = req.body
        const user = {
            name: name,
            email: email,
            password: passwordHash
        }
        const newUser = await User.create(user)
        return newUser
    }

    async getAll() {
        return await User.find()
    }

    async getById(id: string) {
        return await User.findById(id)
    }

    async getByEmail(email: string) {
        const userSearch = await User.findOne({email: email}, 'password')
        return userSearch
    }

    async update(req: Request, passwordHash: string) {

        const id = req.params.id
        const { name,email } = req.body

        const user = {
            id: id,
            name: name,
            email: email,
            password: passwordHash,
            updatedAt: Date.now()
        }
        return await User.updateOne({_id: id}, user)
    }

    async delete(req: Request) {
        const id = req.params.id
        return await User.deleteOne({_id: id})
    }
}