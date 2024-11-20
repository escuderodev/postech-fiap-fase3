import { Request, Response } from "express"
import { UpdatePostService } from "../../service/Post/UpdatePostService"

export class UpdatePostController {
    constructor(readonly service: UpdatePostService){
    }

    async updatePost (req: Request, res: Response) {
    
        const result = await this.service.execute(req)
        
        res.status(200).json({
            message: result,
        })
    }
} 