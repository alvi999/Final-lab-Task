
import {
    BeforeInsert,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  import * as bcrypt from 'bcrypt';
 
@Entity('registration')
export class Registration {
  @PrimaryGeneratedColumn()
  id: number;
 
  @Column({ unique: true })
  username: string;
 
  @Column({ unique: true })
  email: string;
 
  @Column()
  password: string;
 
  @BeforeInsert()
  async HashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
 
}
 