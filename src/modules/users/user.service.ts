import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from 'src/databases/mysql/entitys/user.entity';
import { Repository } from 'typeorm';
import {
  UserI,
  getUserI,
  getUsersI,
} from '../../core/interfaces/user.interface';
import { UserDto } from '../../core/dtos/user.dto';
import * as bcrypt from 'bcrypt';
import { AppResponse } from 'src/core/interfaces/app.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UsersEntity)
    private usersRepository: Repository<UsersEntity>,
  ) {}

  //validar usuario por email para login
  async User(email: string): Promise<UserI> {
    const user = await this.usersRepository.findOne({ where: { email } });
    return user;
  }

  //optener todos los usuarios
  async getUsers(): Promise<AppResponse<getUsersI>> {
    const timestamp = new Date().toISOString();

    try {
      const users = await this.usersRepository.find();

      if (users.length === 0) {
        return {
          successful: true,
          status: HttpStatus.NOT_FOUND,
          message: 'No users found',
          data: {
            users,
          },
          timestamp,
        };
      }

      return {
        successful: true,
        status: HttpStatus.OK,
        message: 'Users retrieved successfully',
        data: {
          users,
        },
        timestamp,
      };
    } catch (error) {
      console.error('Database error:', error);

      if (error instanceof NotFoundException) {
        throw error;
      }

      throw new InternalServerErrorException('Internal server error');
    }
  }

  //optener un usuario por id
  async getUser(id: number): Promise<AppResponse<getUserI>> {
    const timestamp = new Date().toISOString();

    try {
      const user = await this.usersRepository.findOne({ where: { id } });

      if (!user) {
        return {
          successful: false,
          status: HttpStatus.NOT_FOUND,
          message: 'User not found',
          data: null,
          timestamp,
        };
      }

      return {
        successful: true,
        status: HttpStatus.OK,
        message: 'User retrieved successfully',
        data: user,
        timestamp,
      };
    } catch (error) {
      console.error('Database error:', error);

      if (error instanceof NotFoundException) {
        throw error;
      }

      throw new InternalServerErrorException('Internal server error');
    }
  }

  //crear un usuario
  async createUser(user: UserDto): Promise<AppResponse<getUserI>> {
    const timestamp = new Date().toISOString();

    try {
      // validar si el usuario ya existe por dni o email
      const existingUser = await this.usersRepository.findOne({
        where: [{ dni: user.dni }, { email: user.email }],
      });

      if (existingUser) {
        let message = '';
        const dniExists = existingUser.dni === user.dni;
        const emailExists = existingUser.email === user.email;

        if (dniExists) {
          message = 'Dni del usuario ya existe';
        }
        if (emailExists) {
          message = 'Email del usuario ya existe';
        }
        if (dniExists && emailExists) {
          message = 'Dni y Email del usuario ya existen';
        }
        return {
          successful: false,
          status: HttpStatus.CONFLICT,
          message: message,
          data: null,
          timestamp,
        };
      }
      // fin

      const salt = await bcrypt.genSalt();
      user.password = await bcrypt.hash(user.password, salt);

      const newUser = await this.usersRepository.save(user);

      return {
        successful: true,
        status: HttpStatus.CREATED,
        message: 'User created successfully',
        data: newUser,
        timestamp,
      };
    } catch (error) {
      console.error('Database error:', error);

      if (error instanceof NotFoundException) {
        throw error;
      }

      throw new InternalServerErrorException('Internal server error');
    }
  }

  //actualizar un usuario
  async updateUser(id: number, user: UserDto): Promise<AppResponse<getUserI>> {
    const timestamp = new Date().toISOString();

    try {
      const check_user = await this.usersRepository.findOne({ where: { id } });

      if (!check_user) {
        return {
          successful: false,
          status: HttpStatus.NOT_FOUND,
          message: 'User not found',
          data: null,
          timestamp,
        };
      }

      // validar si el usuario ya existe por dni o email
      const check_dni = await this.usersRepository.findOne({
        where: { dni: user.dni },
      });
      const check_email = await this.usersRepository.findOne({
        where: { email: user.email },
      });

      if (check_dni || check_email) {
        let message = '';
        const dniExists =
          check_dni && check_dni.dni === user.dni && check_dni.id !== id;
        const emailExists =
          check_email &&
          check_email.email === user.email &&
          check_email.id !== id;

        if (dniExists) {
          message = 'Dni del usuario ya existe';
        }
        if (emailExists) {
          message = 'Email del usuario ya existe';
        }
        if (dniExists && emailExists) {
          message = 'Dni y Email del usuario ya existen';
        }

        if (dniExists || emailExists) {
          return {
            successful: false,
            status: HttpStatus.CONFLICT,
            message: message,
            data: null,
            timestamp,
          };
        }
      }
      // fin

      if (check_user) {
        await this.usersRepository.update(id, user);
      }

      return {
        successful: true,
        status: HttpStatus.OK,
        message: 'User updated successfully',
        data: check_user,
        timestamp,
      };
    } catch (error) {
      console.error('Database error:', error);

      if (error instanceof NotFoundException) {
        throw error;
      }

      throw new InternalServerErrorException('Internal server error');
    }
  }
}
