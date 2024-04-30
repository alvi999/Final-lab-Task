import {
    BeforeInsert,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  import * as bcrypt from 'bcrypt';
 
@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
 
  @Column({ unique: true })
  name: string;
 
  @Column({ unique: true })
  description: string;
 
}