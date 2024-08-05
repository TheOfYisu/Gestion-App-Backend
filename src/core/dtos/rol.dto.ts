import { IsString, Length, IsNotEmpty, IsNumber } from 'class-validator';

export class RolDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  name: string;

  @IsString()
  @IsNotEmpty()
  @Length(0, 255)
  description: string;

  @IsNumber()
  @IsNotEmpty()
  status: number;
}
