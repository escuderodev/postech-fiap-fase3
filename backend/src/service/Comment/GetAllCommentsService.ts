import { Request } from "express"
import { CommentRepository } from "../../controller/Comment/repository/CommentRepository"

export class GetAllCommentsService  {

    constructor(readonly repository: CommentRepository) {
    }

    async execute(req: Request) {
        return await this.repository.getAll()
    }
}