import {BeforeInsert, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('addTocart')
export class addToCart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  product_name: string;

  @Column({ nullable: false })
  no_of_products: number;
  
}
