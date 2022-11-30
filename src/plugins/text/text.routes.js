export const textRoutes = async fastify => {
  const { textService } = fastify;

  fastify.route({
    method: 'GET',
    url: '/db/text-data/:lang/:group',
    handler: async (request, reply) => {
      const data = await textService.getTextData(request.params);
      reply.code(200).send(data);
    },
  });
};
