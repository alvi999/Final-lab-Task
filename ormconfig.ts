import { addToCart } from 'src/entites/cart.entity';
import { Product } from 'src/entites/product.entity';
import { Registration } from 'src/entites/registration.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
 
const config: PostgresConnectionOptions = {
    type: 'postgres',
    database: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    entities: [Registration,Product,addToCart],
    synchronize: true
};
 
export default config;