import { Request, Response, Router } from 'express';
import { DisciplineRepositoryInMongoDB } from "../database/repository/DisciplineRepositoryInMongoDB";
import { LoginService } from "../service/User/LoginService";
import { CreateDisciplineService } from "../service/Discipline/CreateDisciplineService";
import { CreateDisciplineController } from "../controller/Discipline/CreateDisciplineController";
import { GetAllDiscipliniesService } from "../service/Discipline/GetAllDiscipliniesService";
import { GetAllDiscipliniesController } from "../controller/Discipline/GetAllDiscipliniesController";
import { GetDisciplineByIdService } from "../service/Discipline/GetDisciplineByIdService";
import { GetDisciplineByIdController } from "../controller/Discipline/GetDisciplineByIdController";
import { UpdateDisciplineService } from "../service/Discipline/UpdateDisciplineService";
import { UpdateDisciplineController } from "../controller/Discipline/UpdateDisciplineController";
import { DeleteDisciplineService } from "../service/Discipline/DeleteDisciplineService";
import { DeleteDisciplineController } from "../controller/Discipline/DeleteDisciplineController";

const disciplineRouter = Router();
const respository = new DisciplineRepositoryInMongoDB();
const loginService = new LoginService();

const createDisciplineService = new CreateDisciplineService(respository);
const createDisciplineController = new CreateDisciplineController(createDisciplineService);

const getAllDiscipliniesService = new GetAllDiscipliniesService(respository);
const getAllDiscipliniesController = new GetAllDiscipliniesController(getAllDiscipliniesService);

const getDisciplineByIdService = new GetDisciplineByIdService(respository);
const getDisciplineByIdController = new GetDisciplineByIdController(getDisciplineByIdService);

const updateDisciplineService = new UpdateDisciplineService(respository);
const updateDisciplineController = new UpdateDisciplineController(updateDisciplineService);

const deleteDisciplineService = new DeleteDisciplineService(respository);
const deleteDisciplineController = new DeleteDisciplineController(deleteDisciplineService);

/**
 * @swagger
 * tags:
 *   name: Disciplinas
 *   description: Gerenciamento de disciplinas
 */

/**
 * @swagger
 * /disciplinies:
 *   post:
 *     summary: Cria uma nova disciplina
 *     tags: [Disciplinas]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *                 description: O título da disciplina
 *     responses:
 *       201:
 *         description: Disciplina criada com sucesso
 *       400:
 *         description: Erro na requisição
 */
disciplineRouter.post("/disciplinies", loginService.checkToken, (req: Request, res: Response) => {
    createDisciplineController.createDiscipline(req, res);
});

/**
 * @swagger
 * /disciplinies:
 *   get:
 *     summary: Lista todas as disciplinas
 *     tags: [Disciplinas]
 *     responses:
 *       200:
 *         description: Lista de disciplinas
 */
disciplineRouter.get("/disciplinies", (req: Request, res: Response) => {
    getAllDiscipliniesController.getAllDisciplinies(req, res);
});

/**
 * @swagger
 * /disciplinies/{id}:
 *   get:
 *     summary: Lista uma disciplina pelo ID
 *     tags: [Disciplinas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: O ID da disciplina
 *     responses:
 *       200:
 *         description: Disciplina encontrada
 *       404:
 *         description: Disciplina não encontrada
 */
disciplineRouter.get("/disciplinies/:id", (req: Request, res: Response) => {
    getDisciplineByIdController.getDisciplineById(req, res);
});

/**
 * @swagger
 * /disciplinies/{id}:
 *   put:
 *     summary: Atualiza uma disciplina pelo ID
 *     tags: [Disciplinas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: O ID da disciplina
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: O novo título da disciplina
 *     responses:
 *       200:
 *         description: Disciplina atualizada com sucesso
 *       400:
 *         description: Erro na requisição
 *       404:
 *         description: Disciplina não encontrada
 */
disciplineRouter.put("/disciplinies/:id", loginService.checkToken, (req: Request, res: Response) => {
    updateDisciplineController.updateDiscipline(req, res);
});

/**
 * @swagger
 * /disciplinies/{id}:
 *   delete:
 *     summary: Deleta uma disciplina pelo ID
 *     tags: [Disciplinas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: O ID da disciplina
 *     responses:
 *       200:
 *         description: Disciplina deletada com sucesso
 *       404:
 *         description: Disciplina não encontrada
 */
disciplineRouter.delete("/disciplinies/:id", loginService.checkToken, (req: Request, res: Response) => {
    deleteDisciplineController.deleteDiscipline(req, res);
});

export { disciplineRouter };