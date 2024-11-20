import { Request, Response } from "express"
import { GetAllUsersService } from "../../service/User/GetAllUsersService"

export class GetAllUsersController {

    constructor(readonly service: GetAllUsersService){
    }

    async getAllUsers(req: Request, res: Response) {
        const userList = await this.service.execute(req)
        res.status(200).json({userList})
    }
} 