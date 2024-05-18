import { Module } from '@nestjs/common';
import { ProductsController } from 'src/Controllers/ProductsController';
import { ProductsRepository } from 'src/Repositories/ProductsRepository';

@Module({
    controllers: [ProductsController],

    //Providers passa de qualquer classe que esteja com annotation @injectable
    providers: [ProductsRepository],
  })
  export class ProductsModule {}