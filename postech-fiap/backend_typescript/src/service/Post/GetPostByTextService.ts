import { PostRepositoryInMongoDB } from "../../database/repository/PostRepositoryInMongoDB"

export class GetPostByTextService {
    constructor(readonly repository: PostRepositoryInMongoDB) {
    }

    async execute(keyword: string) {

        const regex = new RegExp(keyword, 'i'); // 'i' para case insensitive
        const posts = await this.repository.getByText(regex)
        return posts
    }
}