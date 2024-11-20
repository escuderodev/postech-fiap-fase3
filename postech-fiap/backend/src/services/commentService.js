import { comment } from "../models/Comment.js";

export class CommentService {

    static async commentList() {
        try {
            return await comment.find({});
        } catch (error) {
            return { message: `Falha ao listar comentários - ${error.message}` };
        }
    };

    static async commentCreate(req) {
        try {
            const { description, author, postId } = req.body

            // validação de campos obrigatórios
            if (!description) {
                throw new Error('description field is required!')
            }

            if (!author) {
                throw new Error('author field is required!')
            }

            if (!postId) {
                throw new Error('postId field is required!')
            }

            const existingPost = await post.findById(postId);

            if (!existingPost) {
                throw new Error('Post não encontrado')
            }

            const comment = {
                description,
                author,
            }

            const newComment = await comment.create(req.body);

            // Associando o comentário ao Post
            await post.findByIdAndUpdate(postId, { $push: { comments: newComment._id } });

            return {
                message: "Comentário cadastrado com sucesso!",
            };
        } catch (error) {
            return `Falha ao cadastrar comentário!`;
        }
    };

    static async commentDelete(id) {
        try {
            const commentSearch = await comment.findById(id);
            if (commentSearch) {
                await comment.findByIdAndDelete(id);
                return "Comentário excluído com sucesso!";
            } else {
                return "Comentário não encontrado!";
            }
        } catch (error) {
            return { message: `Falha ao excluir comentário - ${error.message}` };
        }
    };
};