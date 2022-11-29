import fp from 'fastify-plugin';
import { CalcBuilderDao } from './calc-builder.dao.js';
import { calcBuilderRoutes } from './calc-builder.routes.js';
import { CalcBuilderService } from './calc-builder.services.js';

export const calcBuilder = async fastify => {
  const { database } = fastify;
  const calcBuilderDao = new CalcBuilderDao(database);
  const calcBuilderService = new CalcBuilderService(calcBuilderDao);

  fastify.decorate('calcBuilderService', calcBuilderService);
  fastify.register(calcBuilderRoutes);
};

export default fp(calcBuilder, {
  name: 'calcBuilder',
  decorators: ['calcBuilderService'],
  dependencies: ['database'],
});
