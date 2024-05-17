export class UserRepository{

    //Salvando em array por enquanto
    private users = [];

    //Método asyn para salvar json
    async saveUser(users){
        this.users.push(users);
    }

    //Método list
    async listUsers(){
        return this.users;
    }
}