import { Request, Response } from "express"
import { CreatePostService } from "../../service/Post/CreatePostService"

export class CreatePostController {
    constructor(readonly service: CreatePostService){
    }

    async createPost(req: Request, res: Response) {

        try {
            await this.service.execute(req, res)
            res.status(201).json({
                message: "create post is success!"
            })
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Save post error' });
        }
    }
} 