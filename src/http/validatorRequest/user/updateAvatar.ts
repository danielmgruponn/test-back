import { imageMimeTypes } from "@/http/utils/typesFiles";
import { FastifyRequest } from "fastify";

export default async function updateAvatar(request: FastifyRequest): Promise<string | null>
{
    
    try {
        const file = await request.file()
        if (!file) {
            return "Sin archivo";
        }
        if (imageMimeTypes.includes(file.mimetype)) {
            return null
        }
        return "Archivo no valido"
    } catch (error) {
        console.error(error);
        return "Error al procesar el archivo";
    }
}