import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsersRepository } from "../Jstore.Repositories/UserRepository";
import { UsersDto } from "src/Jstore.Dtos.ts/UsersDto";

@Controller('/users')
export class Usercontroller{

    //INSTANCIANDO REPOSITORY
    //private userRepository = new UserRepository;

    //Com injeção de dependência
    constructor(private userRepository: UsersRepository){}

//FAZENDO CRUD DE EXEMPLO

@Post()
//Salvando repository de array
//Referenciando um DTO como dados de entrada de requisição.
async createUser(@Body() userDatas: UsersDto){
    this.userRepository.saveUser(userDatas);
    return userDatas;

}

//Listando usuarios de forma simplista
@Get()
async listUsers(){
    return this.userRepository.listUsers();
    

}


}
