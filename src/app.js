import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fastifyAutoload from '@fastify/autoload';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const app = async (fastify, opts) => {
  fastify.register(fastifyAutoload, {
    dir: join(__dirname, 'plugins'),
  });

  fastify.get('/ping', async (request, reply) => {
    const ping = reply.getResponseTime() * 1000;
    reply.code(200).send({
      statusCode: 200,
      ping: `${ping} ms`,
    });
  });
};
