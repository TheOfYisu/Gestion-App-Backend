import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { RolService } from './rol.service';
import { getUsersI } from 'src/core/interfaces/user.interface';
import { AuthGuard } from '../../core/guards/auth.guard';
import { RolDto } from 'src/core/dtos/rol.dto';
import { AppResponse } from 'src/core/interfaces/app.interface';
import { getRolI, getRolsI } from 'src/core/interfaces/rol.interface';
import { ReturnConfig } from 'src/configs/return.config';

@Controller('rol')
@UseGuards(AuthGuard)
export class RolController {
  constructor(
    private rolService: RolService,
    private returnConfig: ReturnConfig,
  ) {}

  @Get('/all')
  async getRols(): Promise<AppResponse<getRolsI>> {
    try {
      return await this.rolService.getRols();
    } catch (error) {
      throw new HttpException(
        this.returnConfig.returnResponse<getUsersI>(
          false,
          HttpStatus.INTERNAL_SERVER_ERROR,
          'Unexpected error',
        ),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('/:id')
  async getRol(@Param('id') id: number): Promise<AppResponse<getRolI>> {
    try {
      return await this.rolService.getRol(id);
    } catch (error) {
      throw new HttpException(
        this.returnConfig.returnResponse<getUsersI>(
          false,
          HttpStatus.INTERNAL_SERVER_ERROR,
          'Unexpected error',
        ),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('/create')
  async createRol(@Body() data: RolDto): Promise<AppResponse<getRolI>> {
    try {
      return await this.rolService.createRol(data);
    } catch (error) {
      throw new HttpException(
        this.returnConfig.returnResponse<getUsersI>(
          false,
          HttpStatus.INTERNAL_SERVER_ERROR,
          'Unexpected error',
        ),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Put('/update/:id')
  async updateRol(
    @Param('id') id: number,
    @Body() data: RolDto,
  ): Promise<AppResponse<getRolI>> {
    try {
      return await this.rolService.updateRol(id, data);
    } catch (error) {
      throw new HttpException(
        this.returnConfig.returnResponse<getUsersI>(
          false,
          HttpStatus.INTERNAL_SERVER_ERROR,
          'Unexpected error',
        ),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
