import userModelInterface from "@/http/models/user/domains/userModelInterface";
import userRepositoryInterface from "../domains/userRepositoryInterface";

export default async function findUserByFirebase(repository: userRepositoryInterface, firebase: string): Promise<userModelInterface | void>
{
    const user = await repository.findFirebase(firebase)
    if (!user) {
        return
    }
    return user
}