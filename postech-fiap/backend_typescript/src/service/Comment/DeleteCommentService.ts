import { Request } from "express"
import { CommentRepository } from "../../controller/Comment/repository/CommentRepository"

export class DeleteCommentService  {

    constructor(readonly repository: CommentRepository) {
    }

    async execute(req: Request) {
        return this.repository.delete(req)
    }
}