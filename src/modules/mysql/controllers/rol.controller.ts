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
import { RolDto } from '../dtos/rol.dto';
import { RolService } from '../services/rol.service';

@Controller('rol')
export class RolController {
  //Inyecta el servicio de rol
  constructor(private rolService: RolService) {}

  @Get('get/:id')
  //Funcion para crea un nuevo rol
  getRol(@Param('id') id_rol: string) {
    //Valida si el id del rol es un número, en caso contrario lanza un error
    if (isNaN(Number(id_rol))) {
      throw new HttpException(
        {
          message: 'El id del rol debe ser un número.',
          error: 'Id no válido.',
          statusCode: HttpStatus.BAD_REQUEST,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    //Retorna el rol
    return this.rolService.getRol(id_rol);
  }

  @Get('getall')
  //Funcion para obtener todos los roles
  getAllRol() {
    //Retorna todos los roles
    return this.rolService.getAllRol();
  }

  @Post('create')
  //Funcion para crea un nuevo rol
  createRol(@Body() rolDto: RolDto) {
    //Retorna el rol creado
    return this.rolService.createRol(rolDto);
  }

  @Put('update/:id')
  //Funcion para actualizar un rol
  updateRol(@Param('id') id_rol: string, @Body() data_rol: RolDto) {
    //Valida si el id del rol es un número, en caso contrario lanza un error
    if (isNaN(Number(id_rol))) {
      throw new HttpException(
        {
          message: 'El id del rol debe ser un número.',
          error: 'Id no válido.',
          statusCode: HttpStatus.BAD_REQUEST,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    //retorna el mensaje de actualizado
    return this.rolService.updateRol(id_rol, data_rol);
  }

  @Delete('delete')
  //Funcion para eliminar un rol
  deleteRol(@Param('id') id_rol: string) {
    //Valida si el id del rol es un número, en caso contrario lanza un error
    if (isNaN(Number(id_rol))) {
      throw new HttpException(
        {
          message: 'El id del rol debe ser un número.',
          error: 'Id no válido.',
          statusCode: HttpStatus.BAD_REQUEST,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    //retorna el mensaje de eliminado
    return this.rolService.deleteRol(id_rol);
  }
}
