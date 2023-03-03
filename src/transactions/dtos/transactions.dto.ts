import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsPositive,
  IsOptional,
  IsDate,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTransactionDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ description: 'Details about the transaction' })
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly value: number;

  @IsString()
  @IsNotEmpty()
  readonly category: string;

  @IsString()
  @IsNotEmpty()
  readonly user: string;

  @IsDate()
  @IsOptional()
  readonly transactionDate: Date;
}