import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from 'src/entites/product.entity';
 
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
 
  @Post('create')
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.create(createProductDto);
  }
 
  @Get()
  findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }
 
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Product | undefined> {
    return this.productService.findOne(+id);
  }
 
  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto): Promise<Product> {
    return this.productService.update(+id, updateProductDto);
  }
 
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.productService.remove(+id);
  }
}