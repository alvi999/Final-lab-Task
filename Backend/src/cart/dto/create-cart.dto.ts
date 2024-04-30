import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCartDto {
  id: number;

  @IsString()
  @IsNotEmpty()
  product_name: string;

  @IsString()
  @IsNotEmpty()
  no_of_products: number;

}