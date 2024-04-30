
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistrationModule } from './registration/registration.module';
import config from 'ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';

 
@Module({
  imports: [TypeOrmModule.forRoot(config), RegistrationModule, ProductModule, CartModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 