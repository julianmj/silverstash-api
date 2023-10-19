import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Category } from './category.entity';
import { User } from '../../users/entities/user.entity';

@Entity({ name: 'transactions' })
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'bool' })
  isShared: boolean;

  @Column({ type: 'int' })
  value: number;

  @Column({ type: 'timestamp' })
  registerDate: Date;

  @Column({ type: 'varchar' })
  description: string;

  @ManyToOne(() => Category, (category) => category.transactions)
  category: Category;

  @ManyToOne(() => User, (user) => user.transactions)
  user: User;
}
