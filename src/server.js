import fastify from 'fastify';
import { config } from './config.js';
import { app } from './app.js';

const { host, port, logger } = config.server;

//async bootstrapping
const start = async app => {
  try {
    const server = fastify({ logger });
    server.register(app);
    await server.listen({ port, host });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start(app);
