import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MySQLConfig } from './settings/db.settings';
import { RolController } from './controllers/rol.controller';
import { RolService } from './services/rol.service';
import { RolEntity } from './entitys/rol.entity';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(MySQLConfig),
    TypeOrmModule.forFeature([RolEntity]),
  ],
  controllers: [RolController, UsersController],
  providers: [RolService, UsersService],
})
export class MySQLModule {}
