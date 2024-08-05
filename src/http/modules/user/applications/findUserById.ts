import userModelInterface from "@/http/models/user/domains/userModelInterface";
import userRepositoryInterface from "../domains/userRepositoryInterface";

export default async function findUserById(repository: userRepositoryInterface, id: number): Promise<userModelInterface | void>
{
    return await repository.findId(id)
}