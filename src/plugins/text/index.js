import fp from 'fastify-plugin';
import { TextDao } from './text.dao.js';
import { textRoutes } from './text.routes.js';
import { TextService } from './text.services.js';

export const text = async fastify => {
  const { database } = fastify;
  const textDao = new TextDao(database);
  const textService = new TextService(textDao);

  fastify.decorate('textService', textService);
  fastify.register(textRoutes);
};

export default fp(text, {
  name: 'text',
  decorators: ['textService'],
  dependencies: ['database'],
});
