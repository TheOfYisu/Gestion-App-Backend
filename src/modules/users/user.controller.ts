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
import { UserService } from './user.service';
import { getUserI, getUsersI } from '../../core/interfaces/user.interface';
import { UserDto } from '../../core/dtos/user.dto';
import { AuthGuard } from '../../core/guards/auth.guard';
import { AppResponse } from 'src/core/interfaces/app.interface';
import { ReturnConfig } from 'src/configs/return.config';

@Controller('user')
@UseGuards(AuthGuard)
export class UserController {
  constructor(
    private userService: UserService,
    private returnConfig: ReturnConfig,
  ) {}

  @Get('/all')
  async getUsers(): Promise<AppResponse<getUsersI>> {
    try {
      return await this.userService.getUsers();
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
  async getUser(@Param('id') id: number): Promise<AppResponse<getUserI>> {
    try {
      return await this.userService.getUser(id);
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
  async createUser(@Body() user: UserDto): Promise<AppResponse<getUserI>> {
    try {
      return await this.userService.createUser(user);
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
  async updateUser(
    @Param('id') id: number,
    @Body() user: UserDto,
  ): Promise<AppResponse<getUserI>> {
    try {
      return await this.userService.updateUser(id, user);
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
