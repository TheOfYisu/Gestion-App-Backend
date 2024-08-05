import { UsersEntity } from './user.entity';
import { RolEntity } from './rol.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('userxrol')
export class UserXRoleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UsersEntity, { nullable: false })
  @JoinColumn({ name: 'id_users' })
  user: UsersEntity;

  @ManyToOne(() => RolEntity, { nullable: false })
  @JoinColumn({ name: 'id_rol' })
  role: RolEntity;

  @Column()
  status: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;
}
