import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersEntity } from '../entitys/users.entity';
import { UsersInterface } from '../interfaces/users.interfaces';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersEntity: Repository<UsersEntity>,
  ) {}

  async getUsers(
    id_users: string,
  ): Promise<{ message: string; statusCode: number; user: UsersInterface }> {
    try {
      const user = await this.usersEntity.findOne({
        where: { id_users: Number(id_users) },
      });

      if (!user) {
        throw new HttpException(
          {
            message: 'No se encontro el usuario ene el sistema.',
            error: 'No usuario.',
            statusCode: HttpStatus.NOT_FOUND,
          },
          HttpStatus.NOT_FOUND,
        );
      }

      return {
        statusCode: HttpStatus.OK,
        user: user,
        message: 'Usuario encontrado.',
      };
    } catch (error) {}
  }
  async getAllUsers() {
    return 'This action returns all users';
  }
  async createUsers(data: any) {
    return 'This action adds a new user';
  }
  async updateUsers(id_users: string, data_users: any) {
    return 'This action updates a #${id_users} user';
  }
  async deleteUsers(id_users: string) {
    return 'This action removes a #${id_users} user';
  }
}
