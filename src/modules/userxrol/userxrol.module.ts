import { Module } from '@nestjs/common';
import { UserxrolService } from './userxrol.service';
import { UserxrolController } from './userxrol.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { UserXRoleEntity } from 'src/databases/mysql/entitys/userxrol.entity';
import { ReturnConfig } from 'src/configs/return.config';
import { RolEntity } from 'src/databases/mysql/entitys/rol.entity';
import { UsersEntity } from 'src/databases/mysql/entitys/user.entity';

@Module({
  imports: [
    JwtModule,
    TypeOrmModule.forFeature([UserXRoleEntity, RolEntity, UsersEntity]),
  ],
  providers: [UserxrolService, ReturnConfig],
  controllers: [UserxrolController],
})
export class UserxrolModule {}
