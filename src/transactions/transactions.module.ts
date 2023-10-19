import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from '../database/database.module';

import { TransactionsController } from './controllers/transactions.controller';
import { TransactionsService } from './services/transactions.service';
import { Transaction } from './entities/transaction.entity';
import { CategoriesController } from './controllers/categories.controller';
import { CategoriesService } from './services/categories.service';
import { Category } from './entities/category.entity';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Transaction, Category])],
  controllers: [TransactionsController, CategoriesController],
  providers: [TransactionsService, CategoriesService],
})
export class TransactionsModule {}
