import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { PositionEntity } from './position.entity';
import { DepartmentEntity } from './department.entity';
import { UsersEntity } from './user.entity';

@Entity('data_company')
export class DataCompanyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UsersEntity, { nullable: false })
  @JoinColumn({ name: 'id_users' })
  user: UsersEntity;

  @ManyToOne(() => PositionEntity, { nullable: false })
  @JoinColumn({ name: 'id_position' })
  positon: PositionEntity;

  @ManyToOne(() => DepartmentEntity, { nullable: false })
  @JoinColumn({ name: 'id_department' })
  department: DepartmentEntity;

  @Column({ type: 'datetime' })
  date_entry: Date;

  @Column({ type: 'datetime', nullable: true })
  date_exit: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;
}
