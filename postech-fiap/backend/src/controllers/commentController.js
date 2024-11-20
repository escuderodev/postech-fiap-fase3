import { CommentService } from "../services/commentService.js";

export class CommentController {

    static async commentList(req, res) {
        const result = await CommentService.commentList();

        if (Array.isArray(result)) {
            res.status(200).json(result);
        } else {
            res.status(500).json({ message: result })
        }
    };

    static async commentCreate(req, res) {
        const newComment = await CommentService.commentCreate(req);

        if(typeof newComment === 'string') {
            res.status(500).json({message: `Falha ao cadastrar comentário!`});
        } else {
            res.status(201).json(newComment);
        }
    };

    static async commentDelete(req, res) {
        const id = req.params.id;
        const result = await CommentService.commentDelete(id);

        if (typeof result === 'string') {
            res.status(200).json({
                message: result
            });
        } else {
            res.status(500).json(result);
        }
    };
};