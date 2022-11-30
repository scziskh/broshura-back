export const textRoutes = async fastify => {
  const { textService } = fastify;

  fastify.route({
    method: 'GET',
    url: '/db/text-data',
    handler: async (_, reply) => {
      const data = await textService.getTextData();
      reply.code(200).send(data);
    },
  });
};
