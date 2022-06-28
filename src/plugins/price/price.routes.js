export const priceRoutes = async fastify => {
  const { priceService } = fastify;

  fastify.route({
    method: 'GET',
    url: '/paper',

    handler: async (request, reply) => {
      const paper = await priceService.getPaper();
      reply.code(200).send(paper);
    },
  });
};
