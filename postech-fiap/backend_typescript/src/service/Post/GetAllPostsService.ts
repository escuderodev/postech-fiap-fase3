import { Request } from "express"
import { PostRepositoryInMongoDB } from "../../database/repository/PostRepositoryInMongoDB"

export class GetAllPostsService  {
    constructor(readonly repository: PostRepositoryInMongoDB) {
    }

    async execute(req: Request) {
        return await this.repository.getAll()
    }
}