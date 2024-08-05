import { IsString, IsEmail, Length } from 'class-validator';

export class AuthDto {
  @IsEmail()
  @Length(1, 100)
  email: string;

  @IsString()
  @Length(1, 255)
  password: string;
}
