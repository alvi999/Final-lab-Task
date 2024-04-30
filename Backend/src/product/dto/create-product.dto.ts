
import { IsNotEmpty, IsString } from 'class-validator';
 
export class CreateProductDto {
  id: number;
 
  @IsString()
  @IsNotEmpty()
  name: string;
 
  @IsString()
  @IsNotEmpty()
  description: string;
 
}
 