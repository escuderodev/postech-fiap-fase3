import { Request } from "express"
import { UserRepositoryInMongoDB } from "../../database/repository/UserRepositoryInMongoDB"

export class GetUserByIdService  {

    constructor(readonly repository: UserRepositoryInMongoDB) {
    }

    async execute(id: string) {
        return await this.repository.getById(id)
    }
}