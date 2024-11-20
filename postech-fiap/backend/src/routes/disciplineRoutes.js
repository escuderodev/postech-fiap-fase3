import express from 'express';
import { DisciplineController } from '../controllers/disciplineController.js';
import { UserService } from '../services/userService.js';

const disciplineRoutes = express.Router();

disciplineRoutes.post("/disciplinies", UserService.checkToken, DisciplineController.disciplineCreate);
disciplineRoutes.get("/disciplinies", DisciplineController.disciplinieList);
disciplineRoutes.get("/disciplinies/:id", DisciplineController.getDisciplineById);
disciplineRoutes.put("/disciplinies/:id", UserService.checkToken, DisciplineController.disciplineUpdate);
disciplineRoutes.delete("/disciplinies/:id", UserService.checkToken, DisciplineController.disciplineDelete);

export default disciplineRoutes;