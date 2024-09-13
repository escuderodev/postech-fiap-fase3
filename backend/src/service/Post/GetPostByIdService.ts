import { Request } from "express"
import { PostRepositoryInMongoDB } from "../../database/repository/PostRepositoryInMongoDB"

export class GetPostByIdService  {
    constructor(readonly repository: PostRepositoryInMongoDB) {
    }

    async execute(req: Request) {
        const id = req.params.id
        return await this.repository.getById(id)
    }
}