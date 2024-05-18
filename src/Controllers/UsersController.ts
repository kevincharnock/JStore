import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsersRepository } from "../Repositories/UserRepository";

@Controller('/users')
export class Usercontroller{

    //INSTANCIANDO REPOSITORY
    //private userRepository = new UserRepository;

    //Com injeção de dependência
    constructor(private userRepository: UsersRepository){}

//FAZENDO CRUD DE EXEMPLO


@Post()
//Salvando repository de array
async createUser(@Body() userFields){
    this.userRepository.saveUser(userFields);
    return userFields;

}

//Listando usuarios de forma simplista
@Get()
async listUsers(){
    return this.userRepository.listUsers();
    

}


}
