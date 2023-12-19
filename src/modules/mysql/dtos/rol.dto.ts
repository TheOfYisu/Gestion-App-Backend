import { IsString, IsBoolean, Length } from 'class-validator';

export class RolDto {
  @IsString({ message: 'El nombre debe ser texto.' })
  @Length(1, 50, { message: 'El nombre debe tener entre 1 y 50 caracteres.' })
  name: string;

  @IsString({ message: 'La descripción debe ser texto.' })
  @Length(1, 255, {
    message: 'La descripción debe tener entre 1 y 255 caracteres.',
  })
  description: string;

  @IsBoolean({ message: 'El estado debe ser un valor booleano.' })
  status: boolean;
}
