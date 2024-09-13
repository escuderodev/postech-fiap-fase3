import { Request } from "express"
import { UserRepositoryInMongoDB } from "../../database/repository/UserRepositoryInMongoDB"

export class GetAllUsersService  {

    constructor(readonly repository: UserRepositoryInMongoDB) {
    }

    async execute(req: Request) {
        return await this.repository.getAll()
    }
}