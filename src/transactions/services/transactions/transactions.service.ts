import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from 'pg';

import { CreateTransactionDto } from '../../dtos/transactions.dto';
import { Transaction } from '../../entities/transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private transactionRepo: Repository<Transaction>,
    @Inject('pg') private clientPg: Client,
  ) {}

  findAll() {
    /*console.log(this.configService.apiKey);
    console.log(process.env.NODE_ENV);*/
    return this.transactionRepo.find();
  }

  findOne(id: number) {
    return this.transactionRepo.findOneBy({ id });
  }

  // findByCategory(category: string) {
  //   const transactions = this.transactions.filter(
  //     (t) => t.category === category,
  //   );
  //   return transactions;
  // }

  create(data: CreateTransactionDto) {
    // const newTransaction = new Transaction();
    // newTransaction.category = data.category;
    // newTransaction.description = data.description;
    // newTransaction.user = data.user;
    // newTransaction.value = data.value;
    // newTransaction.transactionDate = new Date();
    const newTransaction = this.transactionRepo.create(data);
    return this.transactionRepo.save(newTransaction);
  }

  getTasks() {
    return new Promise((resolve, reject) => {
      this.clientPg.query('select * from tasks', (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res.rows);
      });
    });
  }
}
