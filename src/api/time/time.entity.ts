import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../user/user.entity';

@Entity('registered_time')
export class Time extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public user_id: number;

  @ManyToOne((type) => User, (times) => Time, { eager: true })
  user: User;

  @Column({ type: 'timestamp', nullable: true, default: null })
  public time_registered: Date;
}
