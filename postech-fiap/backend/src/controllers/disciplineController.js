import { DisciplineService } from "../services/disciplineService.js";

export class DisciplineController {

    static async disciplinieList(req, res) {
        const result = await DisciplineService.disciplinieList();

        if (Array.isArray(result)) {
            res.status(200).json(result);
        } else {
            res.status(500).json({ message: result })
        }
    };

    static async getDisciplineById(req, res) {
        try {
            const id = req.params.id;
            const disciplineSearch = await DisciplineService.getDisciplineById(id);

            if (disciplineSearch) {
                res.status(200).json(disciplineSearch);
            } else {
                res.status(404).json({ message: "Disciplina não encontrada!" });
            }
        } catch (error) {
            res.status(500).json({ message: `Falha ao buscar disciplina por id - ${error.message}` });
        }
    };

    static async disciplineCreate(req, res) {
        const newDiscipline = await DisciplineService.disciplineCreate(req);

        if(typeof newDiscipline === 'string') {
            res.status(500).json({message: `Falha ao cadastrar disciplina!`});
        } else {
            res.status(201).json(newDiscipline);
        }
    };

    static async disciplineUpdate(req, res) {
        const result = await DisciplineService.disciplineUpdate(req);

        if (typeof result === 'string') {
            res.status(200).json({
                message: result
            });
        } else {
            res.status(500).json(result);
        }
    };

    static async disciplineDelete(req, res) {
        const id = req.params.id;
        const result = await DisciplineService.disciplineDelete(id);

        if (typeof result === 'string') {
            res.status(200).json({
                message: result
            });
        } else {
            res.status(500).json(result);
        }
    };
};