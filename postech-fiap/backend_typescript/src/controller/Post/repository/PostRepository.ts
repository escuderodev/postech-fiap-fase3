import { Request } from "express"

export interface PostRepository {
    save(req: Request);
    getAll();
    getById(id: string);
    update(req: Request);
    delete(req: Request);
}