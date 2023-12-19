import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UsersDto } from '../dtos/users.dto';

@Controller('users')
export class UsersController {
  //Inyecta el servicio de rol
  constructor(private userService: UsersService) {}

  //Funcion para obtener un usuario
  @Get('get/:id_users')
  getUsers(@Param('id_users') id_users: string) {
    //Valida si el id del usuario es un número, en caso contrario lanza un error
    if (isNaN(Number(id_users))) {
      throw new HttpException(
        {
          message: 'El id del usuario debe ser un número.',
          error: 'Id no válido.',
          statusCode: HttpStatus.BAD_REQUEST,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    //Retorna el usuario
    return this.userService.getUsers(id_users);
  }

  //Funcion para obtener todos los usuarios
  @Get('getall')
  getAllUsers() {
    //Retorna todos los usuarios
    return this.userService.getAllUsers();
  }

  //Funcion para crea un nuevo usuario
  @Post('create')
  //Funcion para crea un nuevo usuario
  createUsers(@Body() data: UsersDto) {
    //Retorna el usuario creado
    return this.userService.createUsers(data);
  }

  @Put('update/:id_users')
  updateUsers(
    @Param('id_users') id_users: string,
    @Body() data_users: UsersDto,
  ) {
    //Valida si el id del usuario es un número, en caso contrario lanza un error
    if (isNaN(Number(id_users))) {
      throw new HttpException(
        {
          message: 'El id del usuario debe ser un número.',
          error: 'Id no válido.',
          statusCode: HttpStatus.BAD_REQUEST,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    //Retorna el mensaje de actualización
    return this.userService.updateUsers(id_users, data_users);
  }

  //Funcion para eliminar un usuario
  @Delete('delete/:id_users')
  deleteUsers(@Param('id_users') id_users: string) {
    //Valida si el id del usuario es un número, en caso contrario lanza un error
    if (isNaN(Number(id_users))) {
      throw new HttpException(
        {
          message: 'El id del usuario debe ser un número.',
          error: 'Id no válido.',
          statusCode: HttpStatus.BAD_REQUEST,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    //Retorna el mensaje de eliminación
    return this.userService.deleteUsers(id_users);
  }
}
