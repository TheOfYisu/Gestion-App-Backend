import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  app: {
    port: parseInt(process.env.APP_PORT, 10),
    title: process.env.APP_TITLE,
    jwt_secret: process.env.JWT_SECRET,
  },
  mysql: {
    host: process.env.MYSQL_DATABASE_HOST,
    port: parseInt(process.env.MYSQL_DATABASE_PORT, 10),
    username: process.env.MYSQL_DATABASE_USERNAME,
    password: process.env.MYSQL_DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
}));
