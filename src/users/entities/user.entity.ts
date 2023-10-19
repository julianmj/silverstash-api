import {
  Entity,
  Column,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { Transaction } from '../../transactions/entities/transaction.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  password: string;

  @OneToMany(() => Transaction, (transaction) => transaction.category)
  transactions: Transaction[];
}
