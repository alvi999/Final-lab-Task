
 
import { IsNotEmpty, IsString } from 'class-validator';
 
export class CreateRegistrationDto {
  id: number;
 
  @IsString()
  @IsNotEmpty()
  username: string;
 
  @IsString()
  @IsNotEmpty()
  email: string;
 
  @IsString()
  @IsNotEmpty()
  password: string;
}
