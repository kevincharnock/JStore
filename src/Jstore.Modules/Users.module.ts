import { Module } from '@nestjs/common';
import { Usercontroller } from '../Jstore.Controllers/UsersController';
import { UsersRepository } from 'src/Jstore.Repositories/UserRepository';
import * as UnicEmailValidator from 'src/Jstore.Validations/UnicEmailValidator';

@Module({
    controllers: [Usercontroller],
    
    //Providers passa de qualquer classe que esteja com annotation @injectable
    providers: [UsersRepository,UnicEmailValidator.UniqueEmailValidator],
  })
  export class UsersModule {}