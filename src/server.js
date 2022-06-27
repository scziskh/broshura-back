const fastify = require('fastify')({ logger: true });

// Declare a route
fastify.get('/', async (request, reply) => {
  return 'Server';
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
