import { Request, Response } from "express"
import { GetUserByIdService } from "../../service/User/GetUserByIdService"

export class GetUserByIdController {

  constructor(readonly service: GetUserByIdService){
  }

  async getUserById(req: Request, res: Response) {
    
    const id = req.params.id
    const user = await this.service.execute(id)
  
    if(!user) {
      res.status(200).json({message: `User Id ${req.params.id} not found!`})
      return
    }
    
    res.status(200).json({message: user})
  }
} 