import { Request, Response } from "express"
import { DisciplineRepository } from "../../controller/Discipline/repository/DisciplineRepository"

export class CreateDisciplineService {

    constructor(readonly repository: DisciplineRepository) {
    }

    async execute(req: Request, res: Response) {
 
        const { title } = req.body

        // validations
        // check requireds fields
        if(!title) {
            throw new Error('title field is required!')
        }
    
        // create discipline
        const newDiscipline = await this.repository.save(req);
        return newDiscipline;
    }
}