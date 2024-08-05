import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ModulesEntity } from './module.entity';
import { UserXRoleEntity } from './userxrol.entity';

@Entity('userxrolxmod')
export class UserXRolexModEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserXRoleEntity, { nullable: false })
  @JoinColumn({ name: 'id_usersxrol' })
  usersxrol: UserXRoleEntity;

  @ManyToOne(() => ModulesEntity, { nullable: false })
  @JoinColumn({ name: 'id_module' })
  module: ModulesEntity;

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
