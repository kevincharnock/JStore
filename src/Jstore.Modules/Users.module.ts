import { Module } from '@nestjs/common';
import { Usercontroller } from '../Jstore.Controllers/UsersController';
import { UsersRepository } from 'src/Jstore.Repositories/UserRepository';

@Module({
    controllers: [Usercontroller],

    //Providers passa de qualquer classe que esteja com annotation @injectable
    providers: [UsersRepository],
  })
  export class UsersModule {}