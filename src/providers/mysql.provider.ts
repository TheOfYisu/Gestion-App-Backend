import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EntitysAllMySQL } from 'src/databases/mysql/entitys';

export function MySQLProvider(
  configService: ConfigService,
): TypeOrmModuleOptions {
  return {
    type: 'mysql',
    host: configService.get<string>('MYSQL_DATABASE_HOST'),
    port: +configService.get<number>('MYSQL_DATABASE_PORT'),
    username: configService.get<string>('MYSQL_DATABASE_USERNAME'),
    password: configService.get<string>('MYSQL_DATABASE_PASSWORD'),
    database: configService.get<string>('MYSQL_DATABASE_NAME'),
    entities: EntitysAllMySQL,
  };
}
