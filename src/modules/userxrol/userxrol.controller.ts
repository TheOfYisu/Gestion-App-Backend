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
import { AuthGuard } from 'src/core/guards/auth.guard';
import { UserxrolService } from './userxrol.service';
import { ReturnConfig } from 'src/configs/return.config';
import {
  getsUserxRolI,
  getUserxRolI,
} from 'src/core/interfaces/userxrol.interface';
import { AppResponse } from 'src/core/interfaces/app.interface';
import { UserxrolDto } from 'src/core/dtos/userxrol.dto';

@Controller('userxrol')
@UseGuards(AuthGuard)
export class UserxrolController {
  constructor(
    private userxrolService: UserxrolService,
    private returnConfig: ReturnConfig,
  ) {}

  @Get('/all')
  async getUserxRolAll(): Promise<AppResponse<getsUserxRolI>> {
    try {
      return await this.userxrolService.getUserxRolAll();
    } catch (error) {
      throw new HttpException(
        this.returnConfig.returnResponse<getsUserxRolI>(
          false,
          HttpStatus.INTERNAL_SERVER_ERROR,
          'Unexpected error',
        ),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('allrols/:id')
  async getUserxRolAllUser(
    @Param('id') id: number,
  ): Promise<AppResponse<getsUserxRolI>> {
    try {
      return await this.userxrolService.getUserID(id);
    } catch (error) {
      throw new HttpException(
        this.returnConfig.returnResponse<getsUserxRolI>(
          false,
          HttpStatus.INTERNAL_SERVER_ERROR,
          'Unexpected error',
        ),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('allusers/:id')
  async getUserxRolAllRol(
    @Param('id') id: number,
  ): Promise<AppResponse<getsUserxRolI>> {
    try {
      return await this.userxrolService.getRolID(id);
    } catch (error) {
      throw new HttpException(
        this.returnConfig.returnResponse<getsUserxRolI>(
          false,
          HttpStatus.INTERNAL_SERVER_ERROR,
          'Unexpected error',
        ),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('create')
  async createUserxRol(
    @Body() userxrol: UserxrolDto,
  ): Promise<AppResponse<getUserxRolI>> {
    try {
      return await this.userxrolService.createUserxRol(userxrol);
    } catch (error) {
      throw new HttpException(
        this.returnConfig.returnResponse<getUserxRolI>(
          false,
          HttpStatus.INTERNAL_SERVER_ERROR,
          'Unexpected error',
        ),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Put('update/:id')
  async updateUserxRol(
    @Param('id') id: number,
    @Body() userxrol: UserxrolDto,
  ): Promise<AppResponse<getUserxRolI>> {
    try {
      return await this.userxrolService.updateUserxRol(id, userxrol);
    } catch (error) {
      throw new HttpException(
        this.returnConfig.returnResponse<getUserxRolI>(
          false,
          HttpStatus.INTERNAL_SERVER_ERROR,
          'Unexpected error',
        ),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
