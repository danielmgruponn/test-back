// src/config.ts
import * as dotenv from 'dotenv';
import * as fs from 'fs';

const ENV = process.env.NODE_ENV || 'development';

const envFilePath = `.env.${ENV}`;

if (fs.existsSync(envFilePath)) {
  dotenv.config({ path: envFilePath });
} else {
  console.warn(`Warning: ${envFilePath} does not exist. Defaulting to .env`);
  dotenv.config();
}

export const config = {
  port: Number(process.env.PORT) || 3001,
  databaseUrl: process.env.DATABASE_URL || ''
};
