import { Module } from '@nestjs/common';
import { Usercontroller } from './Usercontroller';

@Module({
  imports: [],
  controllers: [Usercontroller],
  providers: [],
})
export class AppModule {}
