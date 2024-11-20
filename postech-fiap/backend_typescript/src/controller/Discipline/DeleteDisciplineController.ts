import { Request, Response } from "express"
import { DeleteDisciplineService } from "../../service/Discipline/DeleteDisciplineService"
import Discipline from "../../model/discipline/Discipline"

export class DeleteDisciplineController {

    constructor(readonly service: DeleteDisciplineService){
    }

    async deleteDiscipline(req: Request, res: Response) {

        const id = req.params.id
    
        const discipline = await Discipline.findById({_id: id})
        if(!discipline) {
          res.status(200).json({message: `Discipline Id ${req.params.id} not found!`})
          return
        }
        
        try {
            await this.service.execute(req)
            res.status(200).json({message: 'Discipline deleted!'})
        } catch (error) {
            res.status(500).json({erro: error})
        }
    }
}