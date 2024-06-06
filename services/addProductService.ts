// Gerenciamento-estoque/services/addProductService.ts

export interface Product {
    id: number;
    name: string;
    code: string;
    description: string;
    price: number;
}

let productDatabase: Product[] = [];

export function addProductService(name: string, code: string, description: string, price: number): Product {
    if (!name || !code || !description || !price) {
        throw new Error('Product name, code, description, and price are required');
    }
    const newProduct: Product = {
        id: Date.now(),
        name,
        code,
        description,
        price
    };
    productDatabase.push(newProduct);
    return newProduct;
}

export function getProductDatabase(): Product[] {
    return productDatabase;
}
