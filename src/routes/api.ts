import { FastifyInstance } from 'fastify';
import { v1 } from './v1/v1';

export async function api(server: FastifyInstance) {
  server.register(v1, { prefix: 'api/v1/' });
}
