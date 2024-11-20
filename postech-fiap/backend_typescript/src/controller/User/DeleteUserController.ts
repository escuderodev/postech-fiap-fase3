import { Request, Response } from "express"
import { DeleteUserService } from "../../service/User/DeleteUserService"
import User from "../../model/user/User"

export class DeleteUserController {

    constructor(readonly service: DeleteUserService){
    }

    async deleteUser(req: Request, res: Response) {

        const id = req.params.id
    
        const user = await User.findById({_id: id})
        if(!user) {
          res.status(200).json({message: `User Id ${req.params.id} not found!`})
          return
        }
        
        try {
            await this.service.execute(req)
            res.status(200).json({message: 'User deleted!'})
        } catch (error) {
            res.status(500).json({erro: error})
        }
    }
} 