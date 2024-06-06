// Gerenciamento-estoque/services/updateProductDetailsService.ts

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

export function updateProductDetails(productId: string, updatedDetails: Partial<Product>): void {
    const index = productDatabase.findIndex(product => product.id === productId);
    if (index !== -1) {
        productDatabase[index] = { ...productDatabase[index], ...updatedDetails };
    }
}

export function getProductDatabase(): Product[] {
    return productDatabase;
}
