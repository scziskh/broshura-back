import fastify from 'fastify';
import { config } from './config.js';
import { app } from './app.js';

const { host, port, logger } = config.server;
//async bootstrapping
const start = async app => {
  try {
    const server = fastify({ logger });

    //Headers to access requests from other domains/ports
    server.addHook('preHandler', (req, reply, done) => {
      reply
        .header('Access-Control-Allow-Origin', '*')
        .header(
          'Access-Control-Allow-Headers',
          'Origin, X-Requested-With, Content-Type, Accept',
        )
        .header('Content-Type', 'application/json; charset=utf-8');
      done();
    });

    server.register(app);
    await server.listen({ port, host });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
start(app);
