import { Request, Response } from "express"
import { GetAllPostsService } from "../../service/Post/GetAllPostsService"

export class GetAllPostsController {
    constructor(readonly service: GetAllPostsService){
    }

    async getAllPosts(req: Request, res: Response) {
        const postList = await this.service.execute(req)
        res.status(200).json({postList})
    }
}