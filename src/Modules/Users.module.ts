import { Module } from '@nestjs/common';
import { Usercontroller } from '../Usercontroller';
import { UserRepository } from 'src/Repositories/UserRepository';

@Module({
    controllers: [Usercontroller],

    //Providers passa de qualquer classe que esteja com annotation @injectable
    providers: [UserRepository],
  })
  export class UsersModule {}