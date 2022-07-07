import 'dotenv/config';

export const config = {
  server: {
    host: process.env.SERVER_HOST,
    port: parseInt(process.env.SERVER_PORT),
    logger: true,
  },
  database: {
    host: process.env.POSTGRESQL_HOST,
    port: parseInt(process.env.POSTGRESQL_PORT),
    user: process.env.POSTGRESQL_USER,
    database: process.env.POSTGRESQL_DB,
    password: process.env.POSTGRESQL_PASSWORD,
  },
};
