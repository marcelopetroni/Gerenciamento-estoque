// Gerenciamento-estoque/services/editProductService.ts

export interface Product {
    id: string;
    name: string;
    code: string;
    description: string;
    price: number;
}

let productDatabase: Product[] = [
    { id: '1', name: 'Product 1', code: 'P001', description: 'Description of Product 1', price: 10 },
    { id: '2', name: 'Product 2', code: 'P002', description: 'Description of Product 2', price: 20 },
    { id: '3', name: 'Product 3', code: 'P003', description: 'Description of Product 3', price: 30 }
];

export function editProduct(product: Product): void {
    const index = productDatabase.findIndex(p => p.id === product.id);
    if (index !== -1) {
        productDatabase[index] = { ...product };
    }
}

export function getProductDatabase(): Product[] {
    return productDatabase;
}
