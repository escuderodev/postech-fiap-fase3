import { Request, Response } from "express"
import { CreateCommentService } from "../../service/Comment/CreateCommentService"

export class CreateCommentController {

    constructor(readonly service: CreateCommentService){
    }

    async createComment(req: Request, res: Response) {
        const newComment = await this.service.execute(req, res)
        res.status(201).json({newComment})
    }
}
