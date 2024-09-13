import { Request, Response } from "express"
import { UpdateDisciplineService } from "../../service/Discipline/UpdateDisciplineService"

export class UpdateDisciplineController {
    
    constructor(readonly service: UpdateDisciplineService){
    }

    async updateDiscipline(req: Request, res: Response) {
    
        const result = await this.service.execute(req)
        
        res.status(200).json({
            message: result,
        })
    }
}