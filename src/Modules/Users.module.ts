import { Module } from '@nestjs/common';
import { Usercontroller } from '../Controllers/UsersController';
import { UsersRepository } from 'src/Repositories/UserRepository';

@Module({
    controllers: [Usercontroller],

    //Providers passa de qualquer classe que esteja com annotation @injectable
    providers: [UsersRepository],
  })
  export class UsersModule {}