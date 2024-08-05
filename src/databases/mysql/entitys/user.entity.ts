import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50, nullable: true })
  name2: string;

  @Column({ length: 50 })
  lastname: string;

  @Column({ length: 50, nullable: true })
  lastname2: string;

  @Column({ unique: true, length: 15 })
  dni: string;

  @Column('date')
  dob: Date;

  @Column({ length: 20 })
  phone: string;

  @Column({ unique: true, length: 100 })
  email: string;

  @Column({ length: 100 })
  address: string;

  @Column({ length: 255, nullable: true })
  password: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;
}
