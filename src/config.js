import 'dotenv/config';

export const config = {
  server: {
    host: process.env.SERVER_HOST,
    port: process.env.SERVER_PORT,
    logger: true,
  },
  database: {
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  },
};
