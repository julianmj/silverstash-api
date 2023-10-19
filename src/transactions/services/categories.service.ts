import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from '../dtos/category.dto';
import { Category } from '../entities/category.entity';
import { TransactionType } from '../enums/enums';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepo: Repository<Category>,
  ) { }

  async findByType(transactionType: TransactionType) {
    return await this.categoryRepo.find({ where: { transactionType, enabled: true } });
  }

  create(data: CreateCategoryDto) {
    const newTransaction = this.categoryRepo.create(data);
    return this.categoryRepo.save(newTransaction);
  }
}
