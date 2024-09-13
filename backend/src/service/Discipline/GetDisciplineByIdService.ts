import { Request } from "express"
import { DisciplineRepository } from "../../controller/Discipline/repository/DisciplineRepository"

export class GetDisciplineByIdService  {

    constructor(readonly repository: DisciplineRepository) {
    }

    async execute(req: Request) {
        const id = req.params.id
        return await this.repository.getById(id)
    }
}