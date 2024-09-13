import { Request, Response } from "express"
import { LoginService } from "../../service/User/LoginService"

export const login = async (req: Request, res: Response) => {

    const loginService = new LoginService()

    try {
        const result = await loginService.execute(req, res)
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
}