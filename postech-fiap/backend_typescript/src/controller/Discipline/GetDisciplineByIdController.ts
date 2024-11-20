import { Request, Response } from "express"
import { GetDisciplineByIdService } from "../../service/Discipline/GetDisciplineByIdService"

export class GetDisciplineByIdController {

  constructor(readonly service: GetDisciplineByIdService){
  }

  async getDisciplineById(req: Request, res: Response) {

    const discipline = await this.service.execute(req)
  
    if(!discipline) {
      res.status(200).json({message: `Discipline Id ${req.params.id} not found!`})
      return
    }
    
    res.status(200).json({message: discipline}) 
  }
}