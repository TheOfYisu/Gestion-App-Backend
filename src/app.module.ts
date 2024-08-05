import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import AppConfig from './configs/app.config';
import { AppService } from './app.service';
import { MySQLModule } from './databases/mysql/mysql.module';
import { AllModules } from './modules/modules.module';
import { ReturnConfig } from './configs/return.config';
import { RolesDecorator } from './core/decorators/roles.decorator';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [AppConfig],
      isGlobal: true,
    }),
    MySQLModule,
    AllModules,
  ],
  controllers: [AppController],
  providers: [ReturnConfig, AppService],
  exports: [ReturnConfig],
})
export class AppModule {}
