import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  OneToOne,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { TransactionType } from '../enums/enums';
import { Transaction } from './transaction.entity';

@Entity({ name: 'categories' })
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'bool' })
  enabled: boolean;

  @Column({ type: 'enum', enum: TransactionType })
  transactionType: TransactionType;

  @ManyToOne(() => Category, (category) => category.childCategories, {
    nullable: true,
  })
  parentCategory: Category;

  @OneToMany(() => Category, (category) => category.parentCategory)
  childCategories: Category[];

  @OneToMany(() => Transaction, (transaction) => transaction.category)
  transactions: Transaction[];
}
