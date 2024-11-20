import express from "express";
import disciplineRoutes from "./disciplineRoutes.js";
import userRoutes from "./userRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).json({message: "Bem vindo ao nosso Projeto da Postech Dev FullStack!"}));

    app.use(express.json(), disciplineRoutes);
    app.use(express.json(), userRoutes);
};

export default routes;