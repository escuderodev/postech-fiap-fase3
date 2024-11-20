import { Request, Response } from "express"
import { GetAllCommentsService } from "../../service/Comment/GetAllCommentsService"

export class GetAllCommentsController {

    constructor(readonly service: GetAllCommentsService){
    }
    
    async getAllComments(req: Request, res: Response) {

        const commentList = await this.service.execute(req)
        res.status(200).json({commentList})
    }
}