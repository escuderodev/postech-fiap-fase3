import { Request, Response, Router } from 'express';
import { CommentRepositoryInMongoDB } from "../database/repository/CommentRepositoryInMongoDB";
import { LoginService } from "../service/User/LoginService";
import { CreateCommentService } from "../service/Comment/CreateCommentService";
import { CreateCommentController } from "../controller/Comment/CreateCommentController";
import { GetAllCommentsService } from "../service/Comment/GetAllCommentsService";
import { GetAllCommentsController } from "../controller/Comment/GetAllCommentsController";
import { DeleteCommentService } from "../service/Comment/DeleteCommentService";
import { DeleteCommentController } from "../controller/Comment/DeleteCommentController";

const commentRouter = Router();
const respository = new CommentRepositoryInMongoDB();
const loginService = new LoginService();

const createCommentService = new CreateCommentService(respository);
const createCommentController = new CreateCommentController(createCommentService);

const getAllCommentsService = new GetAllCommentsService(respository);
const getAllCommentsController = new GetAllCommentsController(getAllCommentsService);

const deleteCommentService = new DeleteCommentService(respository);
const deleteCommentController = new DeleteCommentController(deleteCommentService);

/**
 * @swagger
 * tags:
 *   name: Comments
 *   description: Gerenciamento de comentários
 */

/**
 * @swagger
 * /comments:
 *   post:
 *     summary: Cria um nov comentário
 *     tags: [Comments]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - description
 *             properties:
 *               description:
 *                 type: string
 *                 description: A descrição do comentário
 *     responses:
 *       201:
 *         description: Comentário criada com sucesso
 *       400:
 *         description: Erro na requisição
 */
commentRouter.post("/comments", (req: Request, res: Response) => {
    createCommentController.createComment(req, res);
});

/**
 * @swagger
 * /comments:
 *   get:
 *     summary: Lista todas as comentários
 *     tags: [Comments]
 *     responses:
 *       200:
 *         description: Lista de comentários
 */
commentRouter.get("/comments", (req: Request, res: Response) => {
    getAllCommentsController.getAllComments(req, res);
});

/**
 * @swagger
 * /comments/{id}:
 *   delete:
 *     summary: Deleta um comentário pelo ID
 *     tags: [Comments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: O ID do comentário
 *     responses:
 *       200:
 *         description: Comentário deletada com sucesso
 *       404:
 *         description: Comentário não encontrado
 */
commentRouter.delete("/comments/:id", (req: Request, res: Response) => {
    deleteCommentController.deleteComment(req, res);
});

export { commentRouter };