import { Injectable } from "@nestjs/common";
import { UUID } from "crypto";
import { UsersDto } from "src/Jstore.Dtos.ts/UsersDto";
import { UsersEntity } from "src/Jstore.Entities/UsersEntity";

@Injectable()
export class UsersRepository{


      // Método para remover um usuário
  async remove(id: UUID) {
    const possibleUser = await this.findById(id);
    if (!possibleUser) {
      throw new Error(`User with id ${id} not found`);
    }
    this.users = this.users.filter(user => user.id !== id);
    return possibleUser;
  }


    private findById(id: UUID){
        const possibleUser = this.users.find(
            saveUser => saveUser.id === id
        )
        if(!possibleUser){
            throw new Error("Usuário não existe")
    }
        return possibleUser;

        }


    async updateUsers(id: String, newDatas: Partial<UsersEntity>) {
        const possibleUser = this.users.find(
            saveUser => saveUser.id === id
        )
        if(!possibleUser){
            throw new Error("Usuário não existe");
        }

        Object.entries(this.updateUsers).forEach(([key,value]) => {

            if(key === id){
                return;
            }

            possibleUser[key] = value;
        })

    }    

    //Salvando em array por enquanto
    private users: UsersEntity[] = [];

    //Método asyn para salvar json
    async saveUser(users: UsersEntity){
        this.users.push(users);
    }

    //Método list
    async listUsers(){
        return this.users;
    }

    async ifExistEmail(email: String){
        const possibleUser = this.users.find(
            users => users.email === email
        );
        return possibleUser !== undefined;
    }

}