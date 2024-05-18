import { IsArray, ValidateNested } from "class-validator";
import { CharacteristicsProductsDto } from "./CharacteristicsProductDto";
import { ImagesProductsDto } from "./ImagesProductsDto";
import { Type } from "class-transformer";

export class CreateProductsDto{

    productName: String;
    productValue: number;
    quantity: number;
    description: String;

    /** Este decorator é especialmente útil quando
     *  você tem uma propriedade em seu DTO que é um objeto complexo ou uma inst
     *  ância de outra classe, e você deseja garantir que a estrutura e os dados desse objeto aninhado também sejam validados conforme as regras definidas. */
    @ValidateNested()
    @IsArray() 
    @Type(() => CharacteristicsProductsDto)
    characteristics: CharacteristicsProductsDto[];
    
    @ValidateNested()
    @IsArray() 
    @Type(() => ImagesProductsDto)
    image: ImagesProductsDto[];
    category: String;


}