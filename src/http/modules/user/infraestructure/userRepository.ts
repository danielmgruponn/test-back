import prisma from "@/database/prisma"
import userRepositoryInterface from "../domains/userRepositoryInterface";
import userModelInterface from "@/http/models/user/domains/userModelInterface";
import userModel from "@/http/models/user/userModel";

export default function userRepository(): userRepositoryInterface
{
    return {
        findId,
        findFirebase
    }    
}

async function findId(id: number): Promise<userModelInterface | void>
{
    try {
        const user = await prisma.user.findUnique({
            where: {user_id: id}
        });
        if (!user) {
            return
        }
        return userModel(user)
    } catch (error) {
        console.error(error);
    }
}

async function findFirebase(firebase: string): Promise<userModelInterface | void>
{
    try {
        const user = await prisma.user.findUnique({
            where: {user_firebase_id: firebase}
        });
        if (!user) {
            return
        }
        return userModel(user)
    } catch (error) {
        console.error(error);
    }
}