import { Injectable } from '@nestjs/common';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
import { Repository } from 'typeorm';
import { Registration } from 'src/entities/registration.entity';
import { InjectRepository } from '@nestjs/typeorm';
 
@Injectable()
export class RegistrationService {
 
  constructor(
    @InjectRepository(Registration) private readonly regRepo: Repository<Registration>,
  ) {}
 
  async create(createRegDto: CreateRegistrationDto) {
 
    const user = await this.regRepo.create(createRegDto);
    return await this.regRepo.save(user);
  }
  findAll() {
    return `This action returns all registration`;
  }
 
  async findOne(email:string) {
    return await this.regRepo.findOne({ where: { email: email } });
  }
 
  update(id: number, updateRegistrationDto: UpdateRegistrationDto) {
    return `This action updates a #${id} registration`;
  }
 
  remove(id: number) {
    return `This action removes a #${id} registration`;
  }
}