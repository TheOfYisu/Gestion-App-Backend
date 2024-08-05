import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from '../../core/dtos/auth.dto';
import { AuthResponseI } from '../../core/interfaces/auth.interface';
import { AppResponse } from 'src/core/interfaces/app.interface';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async login(@Body() data: AuthDto): Promise<AppResponse<AuthResponseI>> {
    return await this.authService.signIn(data);
  }
}
