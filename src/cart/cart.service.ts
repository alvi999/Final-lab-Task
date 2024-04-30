import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { addToCart } from 'src/entites/cart.entity';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(addToCart)
    private readonly cartRepository: Repository<addToCart>,
  ) {}

  async create(createCartDto: CreateCartDto): Promise<addToCart> {
    const cart = new addToCart();
    cart.product_name = createCartDto.product_name;
    cart.no_of_products = createCartDto.no_of_products;
    return this.cartRepository.save(cart);
  }

  async findAll(): Promise<addToCart[]> {
    return this.cartRepository.find();
  }

  async findOne(id: number): Promise<addToCart | undefined> {
    return this.cartRepository.findOne({ where: { id } });
  }

  async update(id: number, updateCartDto: UpdateCartDto): Promise<addToCart> {
    const cart = await this.cartRepository.findOne({ where: { id } });
    if (!cart) {
    }
    cart.product_name = updateCartDto.product_name || cart.product_name;
    cart.no_of_products = updateCartDto.no_of_products || cart.no_of_products;
    return this.cartRepository.save(cart);
  }

  async remove(id: number): Promise<void> {
    await this.cartRepository.delete(id);
  }
}