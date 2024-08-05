import {
  IsString,
  IsOptional,
  IsEmail,
  IsDateString,
  Length,
} from 'class-validator';

export class UserDto {
  @IsString()
  @Length(1, 50)
  name: string;

  @IsString()
  @IsOptional()
  @Length(0, 50)
  name2?: string;

  @IsString()
  @Length(1, 50)
  lastname: string;

  @IsString()
  @IsOptional()
  @Length(0, 50)
  lastname2?: string;

  @IsString()
  @Length(1, 15)
  dni: string;

  @IsDateString()
  dob: string;

  @IsString()
  @Length(1, 20)
  phone: string;

  @IsEmail()
  @Length(1, 100)
  email: string;

  @IsString()
  @Length(1, 100)
  address: string;

  @IsString()
  @IsOptional()
  @Length(1, 255)
  password?: string;
}
