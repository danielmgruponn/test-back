import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { getExample, postExample } from '@/http/controllers/v1/userController';
import { loginUser } from '@/http/controllers/v1/authController';

export const v1 = async (fastify: FastifyInstance) => {
  fastify.get('/auth', async (request, reply) => {
    return loginUser(fastify, request, reply)
  });

  //@ts-ignore
  fastify.get('example', { preHandler:[fastify.authenticate] }, async(request: FastifyRequest, reply: FastifyReply) => {
    return getExample(request, reply)
  });
  
  //@ts-ignore
  fastify.post('user/update/avatar', { preHandler:[fastify.authenticate] }, async (request: FastifyRequest, reply: FastifyReply) => {
    return postExample(request, reply)
  });
};
