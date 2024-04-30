import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
 
@Controller('registration')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}
 
  @Post()
  register(@Body(ValidationPipe) createUserDto: CreateRegistrationDto) {
    return this.registrationService.create(createUserDto);
  }
 
  @Get()
  findAll() {
    return this.registrationService.findAll();
  }
 
  @Get('login/:Email')
  findOne(@Param('Email') Email: string) {
    return this.registrationService.findOne(Email);
  }
 
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegistrationDto: UpdateRegistrationDto) {
    return this.registrationService.update(+id, updateRegistrationDto);
  }
 
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registrationService.remove(+id);
  }
}