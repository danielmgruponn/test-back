import userRepository from '@/http/modules/user/infraestructure/userRepository';
import findUserById from '@/http/modules/user/applications/findUserById';
import { FastifyRequest, FastifyReply } from 'fastify';
import httpResponse from '@/http/utils/httpResponse';
import updateAvatar from '@/http/validatorRequest/user/updateAvatar';

export const getExample = async (request: FastifyRequest, reply: FastifyReply) => {
  const user = request.user as { id: number, username: string, iat: number, exp: number }
  const getUser = await findUserById(userRepository(), user.id)  
  return reply.send(await httpResponse().responseSuccess(getUser, null));
};

export const postExample = async (request: FastifyRequest, reply: FastifyReply) => {
  const validate = await updateAvatar(request)
  if (validate) {
    return reply.status(400).send(await httpResponse().responseError(validate, null));
  }
  reply.send({ message: 'This is a POST example' });
};
