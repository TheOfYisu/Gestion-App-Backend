import { Entity, PrimaryGeneratedColumn, Column, Unique, ManyToOne, JoinColumn } from 'typeorm';

@Entity('data_company')
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;
}
