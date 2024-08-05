import userModelInterface from "@/http/models/user/domains/userModelInterface";

export default interface userRepositoryInterface
{
    findId(id: number): Promise<userModelInterface | void>
    findFirebase(firebase: string): Promise<userModelInterface | void>
}