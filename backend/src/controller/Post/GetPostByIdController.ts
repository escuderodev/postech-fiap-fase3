import { Request, Response } from "express"
import { GetPostByIdService } from "../../service/Post/GetPostByIdService"

export class GetPostByIdController {
  constructor(readonly service: GetPostByIdService){
  }

  async getPostById(req: Request, res: Response) {

    const post = await this.service.execute(req)
  
    if(!post) {
      res.status(200).json({message: `Post Id ${req.params.id} not found!`})
      return
    }
    
    res.status(200).json({message: post})
  }
} 