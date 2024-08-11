import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  Index,
} from 'typeorm';
import { UsersEntity } from './user.entity';
import { TypeFileEntity } from './type_file.entity';

@Entity('user_files')
@Index(['user', 'type_file'], { unique: true })
export class UserFilesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UsersEntity, { nullable: false })
  @JoinColumn({ name: 'id_user' })
  user: UsersEntity;

  @ManyToOne(() => TypeFileEntity, { nullable: false })
  @JoinColumn({ name: 'id_type_file' })
  type_file: TypeFileEntity;

  @Column({ type: 'text' })
  value: String;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;
}
