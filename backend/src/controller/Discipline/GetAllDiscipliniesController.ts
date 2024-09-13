import { Request, Response } from "express"
import { GetAllDiscipliniesService } from "../../service/Discipline/GetAllDiscipliniesService"

export class GetAllDiscipliniesController {

    constructor(readonly service: GetAllDiscipliniesService){
    }
    
    async getAllDisciplinies(req: Request, res: Response) {

        const disciplineList = await this.service.execute(req)
        res.status(200).json({disciplineList})
    }

}