import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReturnConfig } from 'src/configs/return.config';
import { RolDto } from 'src/core/dtos/rol.dto';
import { AppResponse } from 'src/core/interfaces/app.interface';
import { getRolI, getRolsI } from 'src/core/interfaces/rol.interface';
import { RolEntity } from 'src/databases/mysql/entitys/rol.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolService {
  constructor(
    @InjectRepository(RolEntity)
    private rolRepository: Repository<RolEntity>,
    private returnConfig: ReturnConfig,
  ) {}

  async getRols(): Promise<AppResponse<getRolsI>> {
    try {
      const roles = await this.rolRepository.find();

      const status = roles.length === 0 ? HttpStatus.NOT_FOUND : HttpStatus.OK;
      const message =
        roles.length === 0 ? 'No roles found' : 'Roles retrieved successfully';

      return this.returnConfig.returnResponse<getRolsI>(true, status, message, {
        roles,
      });
    } catch (error) {
      console.error('Database error:', error);
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Internal server error');
    }
  }

  async getRol(id: number): Promise<AppResponse<getRolI>> {
    try {
      const role = await this.rolRepository.findOne({ where: { id } });

      const status = role ? HttpStatus.OK : HttpStatus.NOT_FOUND;
      const message = role ? 'Role retrieved successfully' : 'Role not found';

      return this.returnConfig.returnResponse<getRolI>(true, status, message, {
        ...role,
      });
    } catch (error) {
      console.error('Database error:', error);
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Internal server error');
    }
  }

  async createRol(data: RolDto): Promise<AppResponse<getRolI>> {
    try {
      const check_role = await this.rolRepository.findOne({
        where: { name: data.name },
      });

      if (check_role) {
        return this.returnConfig.returnResponse<getRolI>(
          false,
          HttpStatus.CONFLICT,
          'Role already exists',
        );
      }

      const role = await this.rolRepository.save(data);

      return this.returnConfig.returnResponse<getRolI>(
        true,
        HttpStatus.CREATED,
        'Role created successfully',
        { ...role },
      );
    } catch (error) {
      console.error('Database error:', error);
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Internal server error');
    }
  }

  async updateRol(id: number, data: RolDto): Promise<AppResponse<getRolI>> {
    try {
      const role = await this.rolRepository.findOne({ where: { id } });

      const check_role = await this.rolRepository.findOne({
        where: { name: data.name },
      });

      if (!role) {
        return this.returnConfig.returnResponse<getRolI>(
          false,
          HttpStatus.NOT_FOUND,
          'Role not found',
        );
      }

      if (check_role && check_role.id !== id) {
        return this.returnConfig.returnResponse<getRolI>(
          false,
          HttpStatus.CONFLICT,
          'Role already exists',
        );
      }

      await this.rolRepository.update(id, data);

      return this.returnConfig.returnResponse<getRolI>(
        true,
        HttpStatus.OK,
        'Role updated successfully',
        { ...role, ...data },
      );
    } catch (error) {
      console.error('Database error:', error);
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Internal server error');
    }
  }
}
