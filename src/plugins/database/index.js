import fp from 'fastify-plugin';
import knex from 'knex';
import { config } from '../../config.js';

const database = async fastify => {
  const connection = knex({
    client: 'pg',
    connection: config.database,
    pool: { min: 2, max: 10 },
  });
  fastify.decorate('database', connection);
};

export default fp(database, { name: 'database' });
