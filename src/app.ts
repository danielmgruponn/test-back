import 'tsconfig-paths/register';
import Fastify from 'fastify';
import prisma from './database/prisma';
import { api } from '@/routes/api';
import { config } from '@/config/config';
import { jwtDecorator } from './http/decorator/jwtDecorator';
import fastifyMultipart from '@fastify/multipart';
import { s3Config } from './config/s3Config';

const server = Fastify();

jwtDecorator(server)

s3Config(server)

server.register(fastifyMultipart)

server.register(api);

server.decorate('prisma', prisma)

const start = async () => {
  try {
    await server.listen({ port: config.port });
    console.log(`Server is running at http://localhost:${config.port}`);
  } catch (err) {
    console.error(err)
    process.exit(1);
  }
};

start();
