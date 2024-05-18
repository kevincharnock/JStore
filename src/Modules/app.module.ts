import { Module } from '@nestjs/common';
import { Usercontroller } from '../Usercontroller';
import { UsersModule } from './Users.module';

@Module({
  imports: [UsersModule],
})
export class AppModule {}
