import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductsRepository } from "src/Repositories/ProductsRepository";

@Controller('/products')
export class ProductsController{

    
constructor(private productsRepository: ProductsRepository){}

@Post()
async createItem(@Body() itens){
    this.productsRepository.saveProducts(itens);
    return itens;
}

@Get()
async listItens(){
    return this.productsRepository.listProducts();
}

}
