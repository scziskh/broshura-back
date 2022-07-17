import { priceSchema } from './price-schema.js';

export const priceRoutes = async fastify => {
  const { priceService } = fastify;

  fastify.route({
    method: 'GET',
    url: '/db/calc-data',
    schema: {
      response: { 200: priceSchema },
    },
    handler: async (_, reply) => {
      const data = await priceService.getCalculatorData();
      reply.code(200).send(data);
    },
  });
};

// Schema
