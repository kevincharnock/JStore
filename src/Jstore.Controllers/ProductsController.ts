import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateProductsDto } from "src/Jstore.Dtos.ts/CreateProductsDto";
import { ProductsRepository } from "src/Jstore.Repositories/ProductsRepository";

@Controller('/products')
export class ProductsController{

    
constructor(private productsRepository: ProductsRepository){}

@Post()
async createItem(@Body() createIten: CreateProductsDto){
    this.productsRepository.saveProducts(createIten);
    return createIten;
}

@Get()
async listItens(){
    return this.productsRepository.listProducts();
}

}
