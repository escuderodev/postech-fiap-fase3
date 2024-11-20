import { Request } from "express"
import { PostRepositoryInMongoDB } from "../../database/repository/PostRepositoryInMongoDB"

export class DeletePostService  {
    constructor(readonly repository: PostRepositoryInMongoDB) {
    }

    async execute(req: Request) {
        return this.repository.delete(req)
    }
}