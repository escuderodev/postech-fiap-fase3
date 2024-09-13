import { Request, Response, Router } from "express"
import { LoginService } from "../service/User/LoginService"
import { PostRepositoryInMongoDB } from "../database/repository/PostRepositoryInMongoDB"
import { CreatePostService } from "../service/Post/CreatePostService"
import { CreatePostController } from "../controller/Post/CreatePostController"
import { GetAllPostsService } from "../service/Post/GetAllPostsService"
import { GetAllPostsController } from "../controller/Post/GetAllPostsController"
import { GetPostByIdService } from "../service/Post/GetPostByIdService"
import { GetPostByIdController } from "../controller/Post/GetPostByIdController"
import { GetPostByTextService } from "../service/Post/GetPostByTextService"
import { GetPostByTextController } from "../controller/Post/GetPostByTextController"
import { UpdatePostService } from "../service/Post/UpdatePostService"
import { UpdatePostController } from "../controller/Post/UpdatePostController"
import { DeletePostService } from "../service/Post/DeletePostService"
import { DeletePostController } from "../controller/Post/DeletePostController"

const postRouter = Router()
const respository = new PostRepositoryInMongoDB()
const loginService = new LoginService()

const createPostService = new CreatePostService(respository)
const createPostController = new CreatePostController(createPostService)

const getAllPostsService = new GetAllPostsService(respository)
const getAllPostsController = new GetAllPostsController(getAllPostsService)

const getPostByIdService = new GetPostByIdService(respository)
const getPostByIdController = new GetPostByIdController(getPostByIdService)

const getPostByTextService = new GetPostByTextService(respository)
const getPostByTextController = new GetPostByTextController(getPostByTextService)

const updatePostService = new UpdatePostService(respository)
const updatePostController = new UpdatePostController(updatePostService)

const deletePostService = new DeletePostService(respository)
const deletePostController = new DeletePostController(deletePostService)

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Cria um novo post
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               discipline:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Post criado com sucesso
 *       400:
 *         description: Erro na criação do post
 */
// criar
postRouter.post("/posts", loginService.checkToken, (req: Request, res: Response) => {
    createPostController.createPost(req, res)
})

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Retorna todos os posts
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: Lista de posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 */
// listar todos
postRouter.get("/posts", (req: Request, res: Response) => {
    getAllPostsController.getAllPosts(req, res)
})

/**
 * @swagger
 * /posts/admin:
 *   get:
 *     summary: Retorna todos os posts (admin)
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 */
// listar todos - visão administrativa
postRouter.get("/posts/admin", loginService.checkToken, (req: Request, res: Response) => {
    getAllPostsController.getAllPosts(req, res)
})

/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     summary: Retorna um post pelo ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Post encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       404:
 *         description: Post não encontrado
 */
// listar apenas um
postRouter.get("/posts/:id", (req: Request, res: Response) => {
    getPostByIdController.getPostById(req, res)
})

/**
 * @swagger
 * /posts/{id}:
 *   put:
 *     summary: Atualiza um post pelo ID
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               discipline:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Post atualizado com sucesso
 *       400:
 *         description: Erro na atualização do post
 */
// atualizar
postRouter.put("/posts/:id", loginService.checkToken, (req: Request, res: Response) => {
    updatePostController.updatePost(req, res)
})

/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     summary: Deleta um post pelo ID
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Post deletado com sucesso
 *       404:
 *         description: Post não encontrado
 */
// deletar
postRouter.delete("/posts/:id", loginService.checkToken, (req: Request, res: Response) => {
    deletePostController.deletePost(req, res)
})

/**
 * @swagger
 * /posts/search/{keyword}:
 *   get:
 *     summary: Busca posts por palavra-chave
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: keyword
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Posts encontrados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 */
// buscar por palavra-chave
postRouter.get("/posts/search/:keyword", (req: Request, res: Response) => {
    getPostByTextController.getPostByText(req, res)
})

export { postRouter }