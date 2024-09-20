import { Request, Response } from "express"
import { DeleteCommentService } from "../../service/Comment/DeleteCommentService"
import Comment from "../../model/comment/Comment"

export class DeleteCommentController {

    constructor(readonly service: DeleteCommentService){
    }

    async deleteComment(req: Request, res: Response) {

        const id = req.params.id
    
        const comment = await Comment.findById({_id: id})
        if(!comment) {
          res.status(200).json({message: `Comment Id ${req.params.id} not found!`})
          return
        }
        
        try {
            await this.service.execute(req)
            res.status(200).json({message: 'Comment deleted!'})
        } catch (error) {
            res.status(500).json({erro: error})
        }
    }
}