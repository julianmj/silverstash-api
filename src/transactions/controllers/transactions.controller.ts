import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { CreateTransactionDto } from '../dtos/transactions.dto';
import { TransactionsService } from '../services/transactions/transactions.service';

@ApiTags('Transactions')
@Controller('transactions')
export class TransactionsController {
  constructor(private transactionService: TransactionsService) {}

  @ApiOperation({ summary: 'List of transactions' })
  @Get()
  getTransactions() {
    return this.transactionService.findAll();
  }

  // @Get('filter')
  // getTransactionsByCategory(@Query('category') category: string) {
  //   return this.transactionService.findByCategory(category);
  // }

  @Post()
  create(@Body() payload: CreateTransactionDto) {
    return this.transactionService.create(payload);
  }

  @Get('tasks')
  getTasks() {
    return this.transactionService.getTasks();
  }
}
