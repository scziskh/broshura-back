export const priceRoutes = async fastify => {
  const { priceService } = fastify;

  fastify.route({
    method: 'GET',
    url: '/db/calc-data',

    handler: async (_, reply) => {
      const data = await priceService.getCalculatorData();

      reply.code(200).send(data);
    },
  });
};

// Schema
