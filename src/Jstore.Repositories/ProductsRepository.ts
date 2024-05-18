import { Injectable } from "@nestjs/common";


@Injectable()
export class ProductsRepository{

    private products = [];

    

    //Método asyn para salvar no array
    async saveProducts(products){
        this.products.push(products);
    }

    //Método list
    async listProducts(){
        return this.products;
    }



}