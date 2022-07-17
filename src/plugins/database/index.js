import fp from 'fastify-plugin';
import knex from 'knex';
import { config } from '../../config.js';
import pkg from 'pg';

const database = async fastify => {
  //numeric is float instead of string
  const { types } = pkg;
  types.setTypeParser(types.builtins.NUMERIC, value => {
    return parseFloat(value);
  });

  const connection = knex({
    client: 'pg',
    connection: config.database,
    pool: { min: 2, max: 10 },
  });
  fastify.decorate('database', connection);
};

export default fp(database, { name: 'database' });
