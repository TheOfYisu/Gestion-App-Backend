import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { UserEntity } from './users.entity';
import { RolEntity } from './rol.entity';

@Entity('userxrol')
export class UserXRoleEntity {
  @PrimaryGeneratedColumn()
  id_userxrol: number;

  @ManyToOne(() => UserEntity, { nullable: false })
  @JoinColumn({ name: 'id_users' })
  user: UserEntity;

  @ManyToOne(() => RolEntity, { nullable: false })
  @JoinColumn({ name: 'id_rol' })
  role: RolEntity;

  @Column()
  status: boolean;
}
