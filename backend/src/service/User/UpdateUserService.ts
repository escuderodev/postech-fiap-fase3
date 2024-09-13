import { Request, Response } from "express"
import { UserRepositoryInMongoDB } from "../../database/repository/UserRepositoryInMongoDB"
import bcrypt from "bcrypt"
import User from "../../model/user/User"

export class UpdateUserService  {

    constructor(readonly repository: UserRepositoryInMongoDB) {
    }

    async execute(req: Request, res: Response) {

        const password = req.body.password
        const id = req.params.id

        const user = await User.findById({_id: id})

        if(!user) {
            return `User Id ${id} not found!`
        }

        // create password encoded
        const salt = await bcrypt.genSalt(12) //add dificult
        const passwordHash = await bcrypt.hash(password, salt) //create password encoded

        await this.repository.update(req, passwordHash)
        return `User update is success!`
    }
}