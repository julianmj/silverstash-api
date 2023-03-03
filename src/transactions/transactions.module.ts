import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from '../database/database.module';

import { TransactionsController } from './controllers/transactions.controller';
import { TransactionsService } from './services/transactions/transactions.service';
import { Transaction } from './entities/transaction.entity';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Transaction])],
  controllers: [TransactionsController],
  providers: [TransactionsService],
})
export class TransactionsModule {}
