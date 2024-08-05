import { HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from '../users/user.service';
import { AuthDto } from '../../core/dtos/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { AuthResponseI } from '../../core/interfaces/auth.interface';
import * as bcrypt from 'bcrypt';
import { AppResponse } from 'src/core/interfaces/app.interface';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(data: AuthDto): Promise<AppResponse<AuthResponseI>> {
    const timestamp = new Date().toISOString();

    const user = await this.userService.User(data.email);
    if (!user) {
      return {
        successful: false,
        status: HttpStatus.UNAUTHORIZED,
        message: 'Email incorrect',
        data: null,
        timestamp: timestamp,
      };
    }

    const isMacch = await bcrypt.compare(data.password, user.password);
    if (!isMacch) {
      return {
        successful: false,
        status: HttpStatus.UNAUTHORIZED,
        message: 'Password incorrect',
        data: null,
        timestamp: timestamp,
      };
    }

    // const rols = await this.userService.getRols(user.id);

    const token = this.jwtService.sign({
      id: user.id,
      email: user.email,
    });

    return {
      successful: true,
      status: HttpStatus.OK,
      message: 'User logged in successfully',
      data: {
        token,
        user: {
          id: user.id,
          name: user.name,
          lastname: user.lastname,
        },
        rol: [],
      },
      timestamp,
    };
  }

  async singOut(): Promise<AppResponse<AuthResponseI>> {
    return {
      successful: true,
      status: HttpStatus.OK,
      message: 'User logged out successfully',
      data: null,
      timestamp: new Date().toISOString(),
    };
  }
}
