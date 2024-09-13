import { Request } from "express"
import { DisciplineRepository } from "../../controller/Discipline/repository/DisciplineRepository"
import Discipline from "../../model/discipline/Discipline"

export class UpdateDisciplineService  {

    constructor(readonly repository: DisciplineRepository) {
    }

    async execute(req: Request) {

        const id = req.params.id

        const discipline = await Discipline.findById({_id: id})

        if(!discipline) {
            return `Discipline Id ${id} not found!`
        }

        await this.repository.update(req)
        return `Discipline update is success!`
    }
}