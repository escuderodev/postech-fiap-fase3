import express from "express";
import getConnection from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await getConnection();

connection.on("error", (error) => {
    console.error("erro de conexão", error.message);
});

connection.once("open", () => {
    console.log("conexão realizada com sucesso!")
})

const app = express();
routes(app);

export default app;