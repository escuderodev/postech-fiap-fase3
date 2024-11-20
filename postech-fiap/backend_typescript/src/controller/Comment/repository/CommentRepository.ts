import { Request } from "express"

export interface CommentRepository {
    save(req: Request);
    getAll();
    getById(id: string);
    delete(req: Request);
}