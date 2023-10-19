import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from 'pg';

import {
  CreateTransactionDto,
  UpdateTransactionDto,
} from '../dtos/transaction.dto';
import { Transaction } from '../entities/transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private transactionRepo: Repository<Transaction>,
  ) {}

  findAll() {
    /*console.log(this.configService.apiKey);
    console.log(process.env.NODE_ENV);*/
    return this.transactionRepo.find();
  }

  async findOne(id: number) {
    const transaction = await this.transactionRepo.findOneBy({ id });
    if (!transaction) {
      throw new NotFoundException(`Transaction #${id} not found`);
    }
    return transaction;
  }

  // findByCategory(category: string) {
  //   const transactions = this.transactions.filter(
  //     (t) => t.category === category,
  //   );
  //   return transactions;
  // }

  create(data: CreateTransactionDto) {
    const newTransaction = this.transactionRepo.create(data);
    return this.transactionRepo.save(newTransaction);
  }

  async update(id: number, changes: UpdateTransactionDto) {
    const transaction = await this.transactionRepo.findOneBy({ id });
    this.transactionRepo.merge(transaction, changes);
    return this.transactionRepo.save(transaction);
  }

  remove(id: number) {
    return this.transactionRepo.delete({ id });
  }
}
