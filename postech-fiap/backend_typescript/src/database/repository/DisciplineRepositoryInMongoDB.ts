import { Request } from "express";
import Discipline from "../../model/discipline/Discipline";
import { DisciplineRepository } from "../../controller/Discipline/repository/DisciplineRepository";

export class DisciplineRepositoryInMongoDB implements DisciplineRepository {
    async save(req: Request) {
        const { title } = req.body;
        const discipline = new Discipline({ title });
        const newDiscipline = await discipline.save();
        return newDiscipline;
    }

    async getAll() {
        return await Discipline.find();
    }

    async getById(id: string) {
        return await Discipline.findById(id);
    }

    async update(req: Request) {
        const id = req.params.id;
        const { title } = req.body;

        const discipline = {
            id: id,
            title: title,
            updatedAt: Date.now()
        };
        return await Discipline.updateOne({ _id: id }, discipline);
    }

    async delete(req: Request) {
        const id = req.params.id;
        return await Discipline.deleteOne({ _id: id });
    }
}