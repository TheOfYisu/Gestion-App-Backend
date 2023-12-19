import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RolEntity } from '../entitys/rol.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RolDto } from '../dtos/rol.dto';
import { RolInterface } from '../interfaces/rol.interfaces';

@Injectable()
export class RolService {
  constructor(
    //Inyecta el repositorio de rol
    @InjectRepository(RolEntity)
    private readonly rolEntity: Repository<RolEntity>,
  ) {}

  //Funcion para crea un nuevo rol
  async createRol(
    data_rol: RolDto,
  ): Promise<{ statusCode: number; rol: RolInterface; message: string }> {
    try {
      //Valida si el rol ya existe
      const rol = await this.rolEntity.findOne({
        where: { name: data_rol.name },
      });
      //Si el rol existe, lanza un error
      if (rol) {
        throw new HttpException(
          {
            message: 'El rol ya está registrado dentro del sistema.',
            error: 'Nombre duplicado.',
            statusCode: HttpStatus.CONFLICT,
          },
          HttpStatus.CONFLICT,
        );
      }
      //Si el rol no existe, guarda el rol
      const newRol = this.rolEntity.create(data_rol);
      const savedRol = await this.rolEntity.save(newRol);
      //Retorna la respuesta
      return {
        statusCode: HttpStatus.OK,
        rol: savedRol,
        message: 'Rol creado correctamente.',
      };
    } catch (error) {
      //En caso de error
      return {
        statusCode: error.getStatus(),
        rol: null,
        message: error.message,
      };
    }
  }

  //Funcion para obtener todos los roles
  async getAllRol(): Promise<{
    statusCode: number;
    roles: RolInterface[];
    message: string;
  }> {
    try {
      //Busca todos los roles
      const roles = await this.rolEntity.find();
      //Si no encuentra roles, lanza un error
      if (roles.length === 0) {
        throw new HttpException(
          {
            message: 'No se encontraron roles registrados.',
            error: 'No se encontraron registros.',
            statusCode: HttpStatus.NOT_FOUND,
          },
          HttpStatus.NOT_FOUND,
        );
      }
      //Retorna la respuesta
      return {
        statusCode: HttpStatus.OK,
        roles: roles,
        message: 'Roles encontrados correctamente.',
      };
    } catch (error) {
      //En caso de error
      return {
        statusCode: error.getStatus(),
        roles: null,
        message: error.message,
      };
    }
  }

  //Funcion para obtener un rol por id
  async getRol(id_rol: string): Promise<{
    statusCode: number;
    rol: RolInterface;
    message: string;
  }> {
    try {
      //Convierte el id a entero
      const idRol = parseInt(id_rol);
      //Busca el rol por id
      const rol = await this.rolEntity.findOne({ where: { id_rol: idRol } });
      //Si no encuentra el rol, lanza un error
      if (!rol) {
        throw new HttpException(
          {
            message: 'El rol no está registrado dentro del sistema.',
            error: 'Rol no encontrado.',
            statusCode: HttpStatus.NOT_FOUND,
          },
          HttpStatus.NOT_FOUND,
        );
      }
      //Retorna la respuesta
      return {
        statusCode: HttpStatus.OK,
        rol: rol,
        message: 'Rol creado correctamente.',
      };
    } catch (error) {
      //En caso de error
      return {
        statusCode: error.getStatus(),
        rol: null,
        message: error.message,
      };
    }
  }

  //Funcion para actualizar un rol
  async updateRol(
    id_rol: string,
    data_rol: RolDto,
  ): Promise<{
    statusCode: number;
    message: string;
  }> {
    try {
      //Convierte el id a entero
      const idRol = parseInt(id_rol);
      //Busca el rol por id
      const rol = await this.rolEntity.findOne({ where: { id_rol: idRol } });
      //Si no encuentra el rol, lanza un error
      if (!rol) {
        throw new HttpException(
          {
            message: 'El rol no está registrado dentro del sistema.',
            error: 'Rol no encontrado.',
            statusCode: HttpStatus.NOT_FOUND,
          },
          HttpStatus.NOT_FOUND,
        );
      }
      //Actualiza el rol
      const rolUpdate = Object.assign(rol, data_rol);
      await this.rolEntity.save(rolUpdate);
      //Retorna la respuesta
      return {
        statusCode: HttpStatus.OK,
        message: 'Rol actualizado correctamente.',
      };
    } catch (error) {
      //En caso de error
      return {
        statusCode: error.getStatus(),
        message: error.message,
      };
    }
  }

  async deleteRol(id_rol: string): Promise<{
    statusCode: number;
    message: string;
  }> {
    try {
      //Convierte el id a entero
      const idRol = parseInt(id_rol);
      //Busca el rol por id
      const rol = await this.rolEntity.findOne({ where: { id_rol: idRol } });
      //Si no encuentra el rol, lanza un error
      if (!rol) {
        throw new HttpException(
          {
            message: 'El rol no está registrado dentro del sistema.',
            error: 'Rol no encontrado.',
            statusCode: HttpStatus.NOT_FOUND,
          },
          HttpStatus.NOT_FOUND,
        );
      }
      //Elimina el rol
      await this.rolEntity.remove(rol);
      //Retorna la respuesta
      return {
        statusCode: HttpStatus.OK,
        message: 'Rol eliminado correctamente.',
      };
    } catch (error) {
      //En caso de error
      return {
        statusCode: error.getStatus(),
        message: error.message,
      };
    }
  }
}
