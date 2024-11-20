import { UserService } from "../services/userService.js";

export class UserController {

    static async UserList(req, res) {
        const result = await UserService.userList();

        if (Array.isArray(result)) {
            res.status(200).json(result);
        } else {
            res.status(500).json({ message: result })
        }
    };

    static async getUserById(req, res) {
        try {
            const id = req.params.id;
            const userSearch = await UserService.getUserById(id);

            if (userSearch) {
                res.status(200).json(userSearch);
            } else {
                res.status(404).json({ message: "Usuário não encontrado!" });
            }
        } catch (error) {
            res.status(500).json({ message: `Falha ao buscar usuário por id - ${error.message}` });
        }
    };

    static async UserCreate(req, res) {
        const result = await UserService.userCreate(req);

        if(typeof result === 'string') {
            res.status(500).json({message: result});
        } else {
            res.status(201).json(result);
        }
    };

    static async UserUpdate(req, res) {
        const result = await UserService.userUpdate(req);

        if (typeof result === 'string') {
            res.status(200).json({
                message: result
            });
        } else {
            res.status(500).json(result);
        }
    };

    static async UserDelete(req, res) {
        const id = req.params.id;
        const result = await UserService.userDelete(id);

        if (typeof result === 'string') {
            res.status(200).json({
                message: result
            });
        } else {
            res.status(500).json(result);
        }
    };

    static async login(req, res) {
        try {
            const result = await UserService.login(req);
            return res.status(200).json({
                message: 'user authenticated',
                result: result
            })
        } catch (error) {
            if (error instanceof Error) {
                return res.status(422).json({ message: error.message });
            }
            return res.status(500).json({ message: "Internal Server Error" });
        }
    };

    
};