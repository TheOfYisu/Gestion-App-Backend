import { IsNotEmpty, IsNumber } from 'class-validator';

export class UserxrolDto {
  @IsNumber()
  @IsNotEmpty()
  id_users: number;

  @IsNumber()
  @IsNotEmpty()
  id_rol: number;

  @IsNumber()
  @IsNotEmpty()
  status: number;
}
