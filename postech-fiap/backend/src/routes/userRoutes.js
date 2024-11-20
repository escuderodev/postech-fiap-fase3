import express from 'express';
import { UserController } from '../controllers/userController.js';
import { UserService } from '../services/userService.js';

const userRoutes = express.Router();

userRoutes.post("/login", UserController.login);
userRoutes.post("/users", UserController.UserCreate);
userRoutes.get("/users", UserController.UserList);
userRoutes.get("/users/:id", UserController.getUserById);
userRoutes.put("/users/:id", UserService.checkToken, UserController.UserUpdate);
userRoutes.delete("/users/:id", UserService.checkToken, UserController.UserDelete);

export default userRoutes;