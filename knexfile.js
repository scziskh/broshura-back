import 'dotenv/config';
import { config } from './src/config.js';

export const development = {
  client: 'pg',
  connection: config.database,
  pool: {
    min: 2,
    max: 10,
  },
};
