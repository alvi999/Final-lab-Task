import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from 'src/entites/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
 
@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}
 
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const product = new Product();
    product.name = createProductDto.name;
    product.description = createProductDto.description;
    return this.productRepo.save(product);
  }
 
  async findAll(): Promise<Product[]> {
    return this.productRepo.find();
  }
 
  async findOne(id: number): Promise<Product | undefined> {
    return this.productRepo.findOne({ where: { id } });
  }
 
 
  async update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
    const product = await this.productRepo.findOne({ where: { id } });
    if (!product) {
    }
    product.name = updateProductDto.name || product.name;
    product.description = updateProductDto.description || product.description;
    return this.productRepo.save(product);
  }
 
  async remove(id: number): Promise<void> {
    await this.productRepo.delete(id);
  }
}
 