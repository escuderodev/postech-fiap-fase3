import { Request } from "express"

export interface DisciplineRepository {
    save(req: Request);
    getAll();
    getById(id: string);
    update(req: Request);
    delete(req: Request);
}