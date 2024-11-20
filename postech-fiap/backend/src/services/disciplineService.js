import { discipline } from "../models/Discipline.js";

export class DisciplineService {

    static async disciplinieList() {
        try {
            return await discipline.find({});
        } catch (error) {
            return {message: `Falha ao listar disciplinas - ${error.message}`};
        }
    };

    static async getDisciplineById(id) {
        try {
            const disciplineSearch = await discipline.findById(id);
            if(disciplineSearch) {
                return disciplineSearch;
            } else {
                return {message: "Disciplina não encontrada!"};
            }
        } catch (error) {
            return {message: `Falha ao buscar disciplina por id - ${error.message}`};
        }
    };

    static async disciplineCreate(req) {
        try {
            const newDiscipline = await discipline.create(req.body);
            return {
                message: "Disciplina cadastrada com sucesso!",
                disciplina: newDiscipline
            };
        } catch (error) {
            return `Falha ao cadastrar disciplina!`;
        }
    };

    static async disciplineUpdate(req) {
        const id = req.params.id;

        try {
            const disciplineSearch = await discipline.findById(id);
            const { title } = req.body;
                        
            if(disciplineSearch) {
                const disciplineUpdated = {
                    title: title,
                    createdAt: disciplineSearch.createdAt,
                    updatedAt: Date.now()
                }

                await discipline.findByIdAndUpdate(id, disciplineUpdated);
                return "Disciplina atualizada com sucesso!";
            } else {
                return "Disciplina não encontrada!";
            }
        } catch (error) {
            return {message: `Falha ao atualizar disciplina - ${error.message}`};
        }
    };

    static async disciplineDelete(id) {
        try {
            const disciplineSearch = await discipline.findById(id);
            if(disciplineSearch) {
                await discipline.findByIdAndDelete(id);
                return "Disciplina excluída com sucesso!";
            } else {
                return "Disciplina não encontrada!";
            }
        } catch (error) {
            return {message: `Falha ao excluir disciplina - ${error.message}`};
        }
    };
};