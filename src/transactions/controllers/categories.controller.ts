import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiKeyGuard } from '../../auth/guards/api-key.guard';
import { CreateCategoryDto } from '../dtos/category.dto';
import { TransactionType } from '../enums/enums';
import { CategoriesService } from '../services/categories.service';

@UseGuards(ApiKeyGuard)
@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
    constructor(private categoriesService: CategoriesService) { }
    
    @ApiOperation({summary: 'Create category'})
    @Post()
    create(@Body() payload: CreateCategoryDto){
        return this.categoriesService.create(payload)
    }

    @ApiOperation({summary: 'Get categories by transaction type'})
    @Get('type/:type')
    getCategoriesByTransactionType(@Param(':type') transactionType: TransactionType){
        return this.categoriesService.findByType(transactionType);
    }

}
