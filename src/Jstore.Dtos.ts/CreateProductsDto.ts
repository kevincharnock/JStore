import { IsArray, IsNotEmpty, IsPositive, IsString, IsUUID, Matches, MaxLength, Min, ValidateNested } from "class-validator";
import { CharacteristicsProductsDto } from "./CharacteristicsProductDto";
import { ImagesProductsDto } from "./ImagesProductsDto";
import { Type } from "class-transformer";
import { UUID } from "crypto";

export class CreateProductsDto{

    @IsUUID()
    id: UUID;

    @IsNotEmpty()
    productName: String;
    
    //Garante que o valor seja um número positivo (maior que zero).
   // @IsPositive()
    //Garante que o valor mínimo seja 1.00. Isso é útil para reforçar que o valor não pode ser zero.
   // @Min(1.00)
    //Garante que o valor tenha até duas casas decimais.
    //@Matches(/^\d+(\.\d{1,2})?$/, { message: 'O valor do produto deve ser um número positivo com até duas casas decimais.' })
    value: Number;
    
    @IsPositive()
    quantity: number;

    @IsNotEmpty({ message: 'A descrição não pode ser vazia.' })
    @MaxLength(1000, { message: 'A descrição não pode ter mais de 1000 caracteres.' })
    description: String;

    /** Este decorator é especialmente útil quando
     *  você tem uma propriedade em seu DTO que é um objeto complexo ou uma inst
     *  ância de outra classe, e você deseja garantir que a estrutura e os dados desse objeto aninhado também sejam validados conforme as regras definidas. */
   // @ValidateNested()
    @IsArray() 
    @Type(() => CharacteristicsProductsDto)
    characteristics: CharacteristicsProductsDto[];
    
 //   @ValidateNested()
    @IsArray() 
    @Type(() => ImagesProductsDto)
    images: ImagesProductsDto[];

    @IsNotEmpty()
    category: String;


}
