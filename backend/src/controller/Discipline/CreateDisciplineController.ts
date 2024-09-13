import { Request, Response } from "express"
import { CreateDisciplineService } from "../../service/Discipline/CreateDisciplineService"

export class CreateDisciplineController {

    constructor(readonly service: CreateDisciplineService){
    }

    async createDiscipline(req: Request, res: Response) {
        const newDiscipline = await this.service.execute(req, res)
        res.status(201).json({newDiscipline})
    }
}
