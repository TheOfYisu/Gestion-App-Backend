import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { GetMySQLConfig } from '../constants/db.constants';

const MySQLConstant = GetMySQLConfig();

export const MySQLConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: MySQLConstant.host,
  port: MySQLConstant.port,
  username: MySQLConstant.username,
  password: MySQLConstant.password,
  database: MySQLConstant.database,
  entities: MySQLConstant.entities,
  synchronize: MySQLConstant.synchronize,
};
