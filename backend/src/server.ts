import express, { json, Application } from 'express';
import "dotenv/config";
import { userRouter } from "../src/routes/userRoutes";
import { disciplineRouter } from "./routes/disciplineRoutes";
import { postRouter } from "./routes/postRoutes";
import { commentRouter } from "./routes/commentRoutes";
import { setupSwagger } from "../swagger";
import cors from 'cors';

export class App {
    private server: express.Application;

    constructor() {
        this.server = express();

        // Defina as opções de CORS
        const corsOptions = {
            origin: 'http://localhost:5173', // Substitua pelo seu domínio
            optionsSuccessStatus: 200
        };

        // Middleware para permitir CORS de uma origem específica
        this.server.use(cors(corsOptions));

        // Middleware para parsear JSON
        this.server.use(json());

        // Rotas
        this.server.use(userRouter);
        this.server.use(disciplineRouter);
        this.server.use(postRouter);
        this.server.use(commentRouter);

        // Rota raiz
        this.server.get("/", (req: express.Request, res: express.Response) => {
            res.status(200).json({ message: "Bem vindo a minha API!" });
        });

        // Configuração do Swagger
        setupSwagger(this.server);
    }

    public getServer(): Application {
        return this.server;
    }
}