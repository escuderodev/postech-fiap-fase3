import { Request, Response, Router } from "express"
import { UserRepositoryInMongoDB } from "../database/repository/UserRepositoryInMongoDB"
import { login } from "../controller/User/LoginController"
import { LoginService } from "../service/User/LoginService"
import { CreateUserService } from "../service/User/CreateUserService"
import { CreateUserController } from "../controller/User/CreateUserController"
import { GetAllUsersService } from "../service/User/GetAllUsersService"
import { GetAllUsersController } from "../controller/User/GetAllUsersController"
import { GetUserByIdService } from "../service/User/GetUserByIdService"
import { GetUserByIdController } from "../controller/User/GetUserByIdController"
import { UpdateUserService } from "../service/User/UpdateUserService"
import { UpdateUserController } from "../controller/User/UpdateUserController"
import { DeleteUserService } from "../service/User/DeleteUserService"
import { DeleteUserController } from "../controller/User/DeleteUserController"

const userRouter = Router()
const respository = new UserRepositoryInMongoDB()
const loginService = new LoginService()

const createUserService = new CreateUserService(respository)
const createUserController = new CreateUserController(createUserService)

const getAllUsersService = new GetAllUsersService(respository)
const getAllUsersController = new GetAllUsersController(getAllUsersService)

const getUserByIdService = new GetUserByIdService(respository)
const getUserByIdController = new GetUserByIdController(getUserByIdService)

const updateUserService = new UpdateUserService(respository)
const updateUserController = new UpdateUserController(updateUserService)

const deleteUserService = new DeleteUserService(respository)
const deleteUserController = new DeleteUserController(deleteUserService)

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Faz login do usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login bem-sucedido
 *       401:
 *         description: Falha no login
 */
// login
userRouter.post("/login", login)

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Erro na criação do usuário
 */
// criar
userRouter.post("/users", loginService.checkToken, (req: Request, res: Response) => {
    createUserController.createUser(req, res)
})

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retorna todos os usuários
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
// // listar todos
userRouter.get("/users", (req: Request, res: Response) => {
    getAllUsersController.getAllUsers(req, res)
})

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Retorna um usuário pelo ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Usuário não encontrado
 */
// // listar apenas um
userRouter.get("/users/:id", (req: Request, res: Response) => {
    getUserByIdController.getUserById(req, res)
})

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Atualiza um usuário pelo ID
 *     tags: [Users]
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
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *       400:
 *         description: Erro na atualização do usuário
 */
// // atualizar
userRouter.put("/users/:id", loginService.checkToken, (req: Request, res: Response) => {
    updateUserController.updateUser(req, res)
})

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Deleta um usuário pelo ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuário deletado com sucesso
 *       404:
 *         description: Usuário não encontrado
 */
// // deletar
userRouter.delete("/users/:id", loginService.checkToken, (req: Request, res: Response) => {
    deleteUserController.deleteUser(req, res)
})

export {userRouter}