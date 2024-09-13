import { Request } from "express"
import { PostRepositoryInMongoDB } from "../../database/repository/PostRepositoryInMongoDB"
import Post from "../../model/post/Post"

export class UpdatePostService  {
    constructor(readonly repository: PostRepositoryInMongoDB) {
    }

    async execute(req: Request) {

        const id = req.params.id
        const { discipline } = req.body.discipline

        const post = await Post.findById({_id: id})

        if(!post) {
            throw new Error(`Post Id ${id} not found!`)
        }

        await this.repository.update(req)
        return `Post update is success!`
    }
}