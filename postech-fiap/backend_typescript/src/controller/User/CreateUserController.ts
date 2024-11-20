import { Request, Response } from "express"
import { CreateUserService } from "../../service/User/CreateUserService"

export class CreateUserController {

    constructor(readonly service: CreateUserService){
    }

    async createUser(req: Request, res: Response) {
        const user = await this.service.execute(req, res)
        res.status(201).json({
            message: "create user is success!"
        })
    }
} 