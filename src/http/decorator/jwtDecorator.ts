import jwt from '@fastify/jwt';
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import httpResponse from '../utils/httpResponse';

export async function jwtDecorator(server: FastifyInstance) {
    server.register(jwt, {
        secret: process.env.JWT_SECRET || '',
        sign: {
            expiresIn: '1h',
        }
    });

    server.decorate("authenticate", async function (request: FastifyRequest, reply: FastifyReply) {
        try {
            if (!request.headers.authorization) {
                reply.status(401).send(await httpResponse().responseError('No Authorization header found', null));
                return;
            }
            await request.jwtVerify();
            request.user = request.user;
        } catch (err: any) {
            if (err.code === 'FST_JWT_AUTHORIZATION_TOKEN_EXPIRED') {
                reply.status(401).send(await httpResponse().responseError('Token has expired, please log in again.', null));
            } else {
                reply.status(401).send(await httpResponse().responseError(err, null));
            }
        }
    });
}
