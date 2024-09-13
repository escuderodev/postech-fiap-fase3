import { Request, Response } from "express"
import { GetPostByTextService } from "../../service/Post/GetPostByTextService"

export class GetPostByTextController {
  constructor(readonly service: GetPostByTextService){
  }

  async getPostByText(req: Request, res: Response) {

    const { keyword } = req.params

    if(!keyword || typeof keyword !== 'string') {
      return res.status(400).json({erro: "A keyword is required for searching!"})
    }
    
    try {
      const posts = await this.service.execute(keyword)
      return res.status(200).json({posts})
    } catch (err) {
      console.error(err);
      return res.status(500).json({error: 'An error occurred while searching for posts'});
    }
  }
} 