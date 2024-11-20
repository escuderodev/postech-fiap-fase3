import { Request } from "express"
import { UserRepositoryInMongoDB } from "../../database/repository/UserRepositoryInMongoDB"

export class DeleteUserService  {

    constructor(readonly repository: UserRepositoryInMongoDB) {
    }

    async execute(req: Request) {
        return this.repository.delete(req)
    }
}