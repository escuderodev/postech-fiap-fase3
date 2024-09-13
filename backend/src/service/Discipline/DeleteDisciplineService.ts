import { Request } from "express"
import { DisciplineRepository } from "../../controller/Discipline/repository/DisciplineRepository"

export class DeleteDisciplineService  {

    constructor(readonly repository: DisciplineRepository) {
    }

    async execute(req: Request) {
        return this.repository.delete(req)
    }
}