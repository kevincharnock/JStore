import { Injectable } from "@nestjs/common";
import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UsersRepository } from "src/Jstore.Repositories/UserRepository";

@Injectable()
@ValidatorConstraint({async:true})
export class UniqueEmailValidator implements ValidatorConstraintInterface{

    constructor(private userRepository: UsersRepository){}

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
       
        const ifEmailExist = await this.userRepository.ifExistEmail(value);
        return !ifEmailExist;
    }
}
export function IsEmailUnique(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: UniqueEmailValidator,
      });
    }
}