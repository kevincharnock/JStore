import { Module } from '@nestjs/common';
import { ProductsController } from 'src/Jstore.Controllers/ProductsController';
import { ProductsRepository } from 'src/Jstore.Repositories/ProductsRepository';

@Module({
    controllers: [ProductsController],

    //Providers passa de qualquer classe que esteja com annotation @injectable
    providers: [ProductsRepository],
  })
  export class ProductsModule {}