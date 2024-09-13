import { Request, Response } from "express"
import { PostRepositoryInMongoDB } from "../../database/repository/PostRepositoryInMongoDB"
import Discipline from "../../model/discipline/Discipline";

export class CreatePostService {

    constructor(readonly repository: PostRepositoryInMongoDB) {
    }

    async execute(req: Request, res: Response) {

        const { title, description, discipline } = req.body
        // create post
        return this.repository.save(req)
    }
}