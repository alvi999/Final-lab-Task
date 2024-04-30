import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { addToCart } from 'src/entites/cart.entity';
@Controller('addToCart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('create')
  create(@Body() createCartDto: CreateCartDto): Promise<addToCart> {
    return this.cartService.create(createCartDto);
  }

  @Get()
  findAll(): Promise<addToCart[]> {
    return this.cartService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<addToCart | undefined> {
    return this.cartService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto): Promise<addToCart> {
    return this.cartService.update(+id, updateCartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.cartService.remove(+id);
  }
}