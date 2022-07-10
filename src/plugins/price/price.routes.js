export const priceRoutes = async fastify => {
  const { priceService } = fastify;

  fastify.route({
    method: 'GET',
    url: '/db/bind-adj',

    handler: async (request, reply) => {
      const data = await priceService.getBindAdj();
      reply.code(200).send(data);
    },
  });

  fastify.route({
    method: 'GET',
    url: '/db/bind-sizes',

    handler: async (request, reply) => {
      const data = await priceService.getBindSizes();
      reply.code(200).send(data);
    },
  });

  fastify.route({
    method: 'GET',
    url: '/db/bind-coefs',

    handler: async (request, reply) => {
      const data = await priceService.getBindCoefs();
      reply.code(200).send(data);
    },
  });

  fastify.route({
    method: 'GET',
    url: '/db/print-coefs',

    handler: async (request, reply) => {
      const data = await priceService.getPrintCoefs();
      reply.code(200).send(data);
    },
  });

  fastify.route({
    method: 'GET',
    url: '/db/papers',

    handler: async (request, reply) => {
      const data = await priceService.getPapers();
      reply.code(200).send(data);
    },
  });

  fastify.route({
    method: 'GET',
    url: '/db/prints',

    handler: async (request, reply) => {
      const data = await priceService.getPrints();
      reply.code(200).send(data);
    },
  });

  fastify.route({
    method: 'GET',
    url: '/db/lamins',

    handler: async (request, reply) => {
      const data = await priceService.getLamins();
      reply.code(200).send(data);
    },
  });

  fastify.route({
    method: 'GET',
    url: '/db/trim',

    handler: async (request, reply) => {
      const data = await priceService.getTrim();
      reply.code(200).send(data);
    },
  });

  fastify.route({
    method: 'GET',
    url: '/db/separators',

    handler: async (request, reply) => {
      const data = await priceService.getSeparators();
      reply.code(200).send(data);
    },
  });

  fastify.route({
    method: 'GET',
    url: '/db/count-coefs',

    handler: async (request, reply) => {
      const data = await priceService.getCountCoefs();
      reply.code(200).send(data);
    },
  });

  fastify.route({
    method: 'GET',
    url: '/db/calc-data',

    handler: async (request, reply) => {
      const data = await priceService.getCalculatorData();
      reply.code(200).send(data);
    },
  });
};
