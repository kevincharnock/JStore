import { Module } from '@nestjs/common';
import { Usercontroller } from '../Jstore.Controllers/UsersController';
import { UsersModule } from './Users.module';
import { ProductsModule } from './Products.module';

@Module({
  imports: [UsersModule,ProductsModule],
})
export class AppModule {}
