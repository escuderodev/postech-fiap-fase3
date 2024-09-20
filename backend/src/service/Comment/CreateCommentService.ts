import { Request, Response } from "express"
import { CommentRepository } from "../../controller/Comment/repository/CommentRepository"

export class CreateCommentService {

    constructor(readonly repository: CommentRepository) {
    }

    async execute(req: Request, res: Response) {
 
        const { description, author, postId } = req.body

        // validations
        // check requireds fields
        if(!description) {
            throw new Error('description field is required!')
        }

        if(!author) {
            throw new Error('author field is required!')
        }

        if(!postId) {
            throw new Error('postId field is required!')
        }
    
        // create comment
        const newComment = await this.repository.save(req);
        return newComment;
    }
}