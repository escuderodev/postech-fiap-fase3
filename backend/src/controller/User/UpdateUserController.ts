import { Request, Response } from "express"
import { UpdateUserService } from "../../service/User/UpdateUserService"

export class UpdateUserController {

    constructor(readonly service: UpdateUserService){
    }

    async updateUser(req: Request, res: Response) {
    
        const result = await this.service.execute(req, res)
        
        res.status(200).json({
            message: result,
        })
    }
} 