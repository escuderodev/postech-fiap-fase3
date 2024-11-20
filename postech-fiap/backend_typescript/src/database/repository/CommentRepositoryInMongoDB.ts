import { Request } from "express";
import Comment from "../../model/comment/Comment";
import { CommentRepository } from "../../controller/Comment/repository/CommentRepository";
import Post from "../../model/post/Post"

export class CommentRepositoryInMongoDB implements CommentRepository {
    async save(req: Request) {
        const { description, author, postId } = req.body;

        const existingPost = await Post.findById(postId);
            
        if (!existingPost) {
            throw new Error('Post não encontrado')
        }

        const comment = {
            description,
            author,
        }

        const newComment = await Comment.create(comment)

        // Associando o comentário ao Post
        await Post.findByIdAndUpdate(postId, { $push: { comments: newComment._id } });

        return newComment

    }

    async getAll() {
        return await Comment.find();
    }

    async getById(id: string) {
        return await Comment.findById(id);
    }

    async delete(req: Request) {
        const id = req.params.id;
        return await Comment.deleteOne({ _id: id });
    }
}