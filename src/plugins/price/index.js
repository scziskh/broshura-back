import fp from 'fastify-plugin';
import { PriceDao } from './price.dao.js';
import { priceRoutes } from './price.routes.js';
import { PriceService } from './price.services.js';

export const price = async fastify => {
  const { database } = fastify;
  const priceDao = new PriceDao(database);
  const priceService = new PriceService(priceDao);

  fastify.decorate('priceService', priceService);
  fastify.register(priceRoutes);
};

export default fp(price, {
  name: 'price',
  dependencies: ['database'],
});
