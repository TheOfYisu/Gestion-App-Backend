import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UsersEntity } from 'src/databases/mysql/entitys/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { ReturnConfig } from 'src/configs/return.config';

@Module({
  imports: [JwtModule, TypeOrmModule.forFeature([UsersEntity])],
  controllers: [UserController],
  providers: [UserService, ReturnConfig],
  exports: [UserService],
})
export class UserModule {}
