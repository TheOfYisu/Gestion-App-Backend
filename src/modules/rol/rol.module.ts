import { Module } from '@nestjs/common';
import { RolController } from './rol.controller';
import { RolService } from './rol.service';
import { RolEntity } from 'src/databases/mysql/entitys/rol.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { ReturnConfig } from 'src/configs/return.config';
import { RolesDecorator } from 'src/core/decorators/roles.decorator';

@Module({
  imports: [JwtModule, TypeOrmModule.forFeature([RolEntity])],
  controllers: [RolController],
  providers: [RolService, ReturnConfig, RolesDecorator],
})
export class RolModule {}
