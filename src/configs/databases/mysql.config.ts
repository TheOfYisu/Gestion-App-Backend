import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config({
  path: './.env',
});

export default new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_DATABASE_HOST,
  port: +process.env.MYSQL_DATABASE_PORT,
  username: process.env.MYSQL_DATABASE_USERNAME,
  password: process.env.MYSQL_DATABASE_PASSWORD,
  database: process.env.MYSQL_DATABASE_NAME,
  entities: ['./src/databases/mysql/entitys/*.entity.ts'],
  migrations: ['./src/databases/mysql/migrations/*.ts'],
});
