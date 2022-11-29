export const calcBuilderRoutes = async fastify => {
  const { calcBuilderService } = fastify;

  fastify.route({
    method: 'GET',
    url: '/db/calc-builder',
    handler: async (_, reply) => {
      const data = await calcBuilderService.getCalculatorBuilder();
      reply.code(200).send(data);
    },
  });
};

// Schema
