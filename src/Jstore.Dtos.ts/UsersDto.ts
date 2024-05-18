import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";


export class UsersDto{

    //Importante instalar decorators do class-validator
    //npm install class-validator class-transformer

    @IsString({message: 'Nome apenas por caracteres'})
    @IsNotEmpty({message: 'Campo não pode ser vazio'})
    name: String;

    @IsEmail(undefined,{message: 'Digite de acordo o e-mail'})
    email: String;

    @MinLength(6, {message: 'A senha precisa de no mínimo 6 caracteres'})
    @IsNotEmpty()
    password: String;

}