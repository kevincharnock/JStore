import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UsersRepository } from "../Jstore.Repositories/UserRepository";
import { UsersDto } from "src/Jstore.Dtos.ts/UsersDto";
import { UsersEntity } from "src/Jstore.Entities/UsersEntity";
import { v4 as uuid } from "uuid";

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

    const userEntity = new UsersEntity();
    userEntity.email = userDatas.email;
    userEntity.name = userDatas.name;
    userEntity.password = userDatas.password;
    userEntity.id = uuid();

    this.userRepository.saveUser(userEntity);
    return {id: userEntity.id, message:'User criado com sucesos'};

}

//Listando usuarios de forma simplista
@Get()
async listUsers(){
    return this.userRepository.listUsers();

}

@Put('/:id')
async updateUsers(@Param('id') id: uuid, @Body() newDatas: UsersDto ){
    const updateUser = await this.userRepository.updateUsers(id, newDatas);
}

@Delete('/:id')
async deleteUser(@Param('id') id: uuid){
    const deletedUser = await this.userRepository.remove(id);
    return{
        user: deletedUser,
        message: 'Usuário removido'
    }
}


}
