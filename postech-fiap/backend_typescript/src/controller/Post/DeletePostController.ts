import { Request, Response } from "express"
import { DeletePostService } from "../../service/Post/DeletePostService"
import Post from "../../model/post/Post"

export class DeletePostController {
    constructor(readonly service: DeletePostService){
    }

    async deletePost(req: Request, res: Response) {

        const id = req.params.id
    
        const post = await Post.findById({_id: id})
        if(!post) {
          res.status(200).json({message: `Post Id ${req.params.id} not found!`})
          return
        }
        
        try {
            await this.service.execute(req)
            res.status(200).json({message: 'Post deleted!'})
        } catch (error) {
            res.status(500).json({erro: error})
        }
    }
}