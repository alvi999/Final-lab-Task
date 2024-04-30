import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { addToCart } from 'src/entites/cart.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([addToCart])],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}