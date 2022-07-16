import fp from 'fastify-plugin';
import { PriceDao } from './price.dao.js';
import { priceRoutes } from './price.routes.js';
import { PriceService } from './price.services.js';
import pkg from 'pg';

export const price = async fastify => {
  const { database } = fastify;
  const priceDao = new PriceDao(database);
  const priceService = new PriceService(priceDao);

  //numeric is float instead of string
  const { types } = pkg;
  types.setTypeParser(types.builtins.NUMERIC, value => {
    return parseFloat(value);
  });

  fastify.decorate('priceService', priceService);
  fastify.register(priceRoutes);
};

export default fp(price, {
  name: 'price',
  decorators: ['priceService'],
  dependencies: ['database'],
});
