import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ApiKeyGuard } from '../../auth/guards/api-key.guard';

import {
  CreateTransactionDto,
  UpdateTransactionDto,
} from '../dtos/transaction.dto';
import { TransactionsService } from '../services/transactions.service';

@UseGuards(ApiKeyGuard)
@ApiTags('Transactions')
@Controller('transactions')
export class TransactionsController {
  constructor(private transactionService: TransactionsService) {}

  @ApiOperation({ summary: 'List of transactions' })
  @Get()
  getTransactions() {
    return this.transactionService.findAll();
  }

  @Get(':id')
  getTransaction(@Param('id', ParseIntPipe) id: number) {
    return this.transactionService.findOne(id);
  }

  // @Get('filter')
  // getTransactionsByCategory(@Query('category') category: string) {
  //   return this.transactionService.findByCategory(category);
  // }

  @Post()
  create(@Body() payload: CreateTransactionDto) {
    return this.transactionService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateTransactionDto,
  ) {
    return this.transactionService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.transactionService.remove(id);
  }

}
