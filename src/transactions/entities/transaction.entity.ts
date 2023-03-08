import { Column, PrimaryGeneratedColumn, Entity, Timestamp } from 'typeorm';

@Entity({ name: 'transactions' })
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'int' })
  value: number;

  @Column({ type: 'varchar', length: 50 })
  category: string;

  @Column({ type: 'varchar', length: 20 })
  user: string;

  @Column({ type: 'timestamp' })
  transactionDate: Date;
}
