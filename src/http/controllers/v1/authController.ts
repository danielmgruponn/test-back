import findUserByFirebase from '@/http/modules/user/applications/findUserByFirebase';
import userRepository from '@/http/modules/user/infraestructure/userRepository';
import httpResponse from '@/http/utils/httpResponse';
import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';

export async function loginUser(server: FastifyInstance, request: FastifyRequest, reply: FastifyReply) {
  const firebase = request.headers['x-api-key'] as string
  if (!firebase) {
    return reply.status(401).send(await httpResponse().responseError('Token Invalid', null));
  }

  const user = await findUserByFirebase(userRepository(), firebase)

  if (!user) {
    return reply.status(401).send(await httpResponse().responseError('Firebase Invalid', null));
  }

  const token = server.jwt.sign({ id: user.id, username: user.nick_name });
  reply.status(200).send(await httpResponse().responseSuccess(token, null));
}
