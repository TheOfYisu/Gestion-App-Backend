import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MySQLModule } from './modules/mysql/mysql.module';

@Module({
  imports: [MySQLModule],
  controllers: [AppController],
})
export class AppModule {}
