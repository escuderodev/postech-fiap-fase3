import { Request } from "express"
import { DisciplineRepository } from "../../controller/Discipline/repository/DisciplineRepository"

export class GetAllDiscipliniesService  {

    constructor(readonly repository: DisciplineRepository) {
    }

    async execute(req: Request) {
        return await this.repository.getAll()
    }
}