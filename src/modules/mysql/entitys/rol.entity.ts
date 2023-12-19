import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

//Entidad de rol
@Entity('rol')
export class RolEntity {
  @PrimaryGeneratedColumn()
  id_rol: number;

  @Column({ unique: true, length: 50 })
  name: string;

  @Column({ length: 255 })
  description: string;

  @Column()
  status: boolean;
}
