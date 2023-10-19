import { PartialType } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { TransactionType } from '../enums/enums';

export class CreateCategoryDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @IsBoolean()
  readonly enabled: true;

  @IsNotEmpty()
  @IsEnum(TransactionType)
  readonly transactionType: TransactionType;

  @IsOptional()
  readonly parentCategoryId: number;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
