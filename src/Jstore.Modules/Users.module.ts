import { Module } from '@nestjs/common';
import { Usercontroller } from '../Jstore.Controllers/UsersController';
import { UsersRepository } from 'src/Jstore.Repositories/UserRepository';
import { UsersDto } from 'src/Jstore.Dtos.ts/UsersDto';
import { UniqueEmailValidator } from 'src/Validations/UnicEmailValidator';

@Module({
    controllers: [Usercontroller],
    
    //Providers passa de qualquer classe que esteja com annotation @injectable
    providers: [UsersRepository,UniqueEmailValidator],
  })
  export class UsersModule {}