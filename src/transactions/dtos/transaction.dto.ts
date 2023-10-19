import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsPositive,
  IsOptional,
  IsDate,
  IsBoolean,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateTransactionDto {
  @IsNumber()
  @IsNotEmpty()
  readonly categoryId: number;

  @IsNumber()
  @IsNotEmpty()
  readonly userId: number;

  @IsBoolean()
  @IsNotEmpty()
  readonly isShared: boolean;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly value: number;

  @IsDate()
  @IsNotEmpty()
  readonly registerDate: Date;

  @IsOptional()
  @IsString()
  @ApiProperty({ description: 'Details about the transaction' })
  readonly description: string;
}

export class UpdateTransactionDto extends PartialType(CreateTransactionDto) {}
