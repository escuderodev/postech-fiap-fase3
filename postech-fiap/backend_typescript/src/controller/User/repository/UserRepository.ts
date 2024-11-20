import { Request } from "express"

export interface UserRepository {
    save(req: Request, passwordHash: string);
    getAll();
    getById(id: string);
    update(req: Request, passwordHash: string);
    delete(req: Request);
}