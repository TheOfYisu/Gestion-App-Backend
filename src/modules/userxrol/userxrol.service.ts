import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserxrolDto } from 'src/core/dtos/userxrol.dto';
import { AppResponse } from 'src/core/interfaces/app.interface';
import {
  getsUserxRolI,
  getUserxRolI,
} from 'src/core/interfaces/userxrol.interface';
import { RolEntity } from 'src/databases/mysql/entitys/rol.entity';
import { UsersEntity } from 'src/databases/mysql/entitys/user.entity';
import { UserXRoleEntity } from 'src/databases/mysql/entitys/userxrol.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserxrolService {
  constructor(
    @InjectRepository(UserXRoleEntity)
    private userxrolRepository: Repository<UserXRoleEntity>,
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
    @InjectRepository(RolEntity)
    private readonly rolRepository: Repository<RolEntity>,
  ) {}

  private mapToGetUserxRolI(entity: UserXRoleEntity): getUserxRolI {
    return {
      id: entity.id,
      id_users: entity.user,
      id_rol: entity.role,
      status: entity.status,
      created_at: entity.created_at,
      updated_at: entity.updated_at,
    };
  }

  private responseUserxRol(
    userxrol: UserXRoleEntity,
  ): AppResponse<getUserxRolI> {
    const timestamp = new Date().toISOString();
    const message = userxrol
      ? 'User x Rol retrieved successfully'
      : 'No User x Rol found';
    const data = userxrol ? this.mapToGetUserxRolI(userxrol) : null;

    return {
      successful: true,
      status: HttpStatus.OK,
      message: message,
      data: data,
      timestamp,
    };
  }

  private responseUserxRoles(
    userxrol: UserXRoleEntity[],
  ): AppResponse<getsUserxRolI> {
    const timestamp = new Date().toISOString();
    const message =
      userxrol.length === 0
        ? 'No User x Rol found'
        : 'User x Roles retrieved successfully';
    const data = {
      userxrol:
        userxrol.length === 0 ? [] : userxrol.map(this.mapToGetUserxRolI),
    };

    return {
      successful: true,
      status: HttpStatus.OK,
      message: message,
      data: data,
      timestamp,
    };
  }

  async getUserxRolAll(): Promise<AppResponse<getsUserxRolI>> {
    try {
      const userxrolentoty = await this.userxrolRepository.find({
        relations: ['user', 'role'],
        select: {
          user: {
            id: true,
            name: true,
            lastname: true,
          },
          role: {
            id: true,
            name: true,
          },
        },
      });
      return this.responseUserxRoles(userxrolentoty);
    } catch (error) {
      throw new InternalServerErrorException(
        `Internal server error: ${error.message}`,
        error,
      );
    }
  }

  async getID(id: number): Promise<AppResponse<getUserxRolI>> {
    try {
      const userxrol = await this.userxrolRepository.findOne({ where: { id } });
      return this.responseUserxRol(userxrol);
    } catch (error) {
      throw new InternalServerErrorException('Internal server error');
    }
  }

  async createUserxRol(data: UserxrolDto): Promise<AppResponse<getUserxRolI>> {
    const timestamp = new Date().toISOString();
    try {
      const check = await this.userxrolRepository.findOne({
        where: [{ user: { id: data.id_users }, role: { id: data.id_rol } }],
      });
      if (check) {
        return {
          successful: false,
          status: HttpStatus.CONFLICT,
          message: 'User x Rol already exist',
          data: null,
          timestamp: new Date().toISOString(),
        };
      }

      const user = await this.usersRepository.findOne({
        where: { id: data.id_users },
      });

      const rol = await this.rolRepository.findOne({
        where: { id: data.id_rol },
      });

      const userxrol = new UserXRoleEntity();
      userxrol.user = user;
      userxrol.role = rol;
      userxrol.status = data.status;

      const res = await this.userxrolRepository.save(userxrol);
      return {
        successful: true,
        status: HttpStatus.OK,
        message: 'User x Rol created successfully',
        data: null,
        timestamp,
      };
    } catch (error) {
      throw new InternalServerErrorException(
        `Internal server error: ${error.message}`,
        error,
      );
    }
  }

  async updateUserxRol(
    id: number,
    data: UserxrolDto,
  ): Promise<AppResponse<getUserxRolI>> {
    const timestamp = new Date().toISOString();
    try {
      const userxrol = await this.userxrolRepository.findOne({ where: { id } });
      if (!userxrol) {
        return this.responseUserxRol(userxrol);
      }
      const check = await this.userxrolRepository.findOne({
        where: [{ user: { id: data.id_users }, role: { id: data.id_rol } }],
      });
      if (check) {
        return {
          successful: false,
          status: HttpStatus.CONFLICT,
          message: 'User x Rol already exist',
          data: null,
          timestamp: new Date().toISOString(),
        };
      }
      const user = await this.usersRepository.findOne({
        where: { id: data.id_users },
      });
      const rol = await this.rolRepository.findOne({
        where: { id: data.id_rol },
      });
      userxrol.user = user;
      userxrol.role = rol;
      userxrol.status = data.status;
      await this.userxrolRepository.update(id, userxrol);
      return {
        successful: true,
        status: HttpStatus.OK,
        message: 'User x Rol update successfully',
        data: null,
        timestamp,
      };
    } catch (error) {
      throw new InternalServerErrorException(
        `Internal server error: ${error.message}`,
        error,
      );
    }
  }

  async getUserID(id_user: number): Promise<AppResponse<getsUserxRolI>> {
    try {
      const userxrol = await this.userxrolRepository.find({
        where: { user: { id: id_user } },
        relations: ['role'],
        select: {
          role: {
            id: true,
            name: true,
          },
        },
      });
      return this.responseUserxRoles(userxrol);
    } catch (error) {
      throw new InternalServerErrorException(
        `Internal server error: ${error.message}`,
        error,
      );
    }
  }

  async getRolID(id_rol: number): Promise<AppResponse<getsUserxRolI>> {
    try {
      const userxrol = await this.userxrolRepository.find({
        where: { role: { id: id_rol } },
        relations: ['user'],
        select: {
          user: {
            id: true,
            name: true,
            lastname: true,
          },
        },
      });
      return this.responseUserxRoles(userxrol);
    } catch (error) {
      throw new InternalServerErrorException(
        `Internal server error: ${error.message}`,
        error,
      );
    }
  }
}
