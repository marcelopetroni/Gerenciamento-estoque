// Gerenciamento-estoque/services/removeProductService.ts

export interface Product {
    id: string;
    name: string;
    quantity: number;
}

let productDatabase: Product[] = [
    { id: '1', name: 'Product A', quantity: 10 },
    { id: '2', name: 'Product B', quantity: 20 },
    { id: '3', name: 'Product C', quantity: 15 }
];

export function removeProduct(productId: string): void {
    const index = productDatabase.findIndex(product => product.id === productId);
    if (index !== -1) {
        productDatabase.splice(index, 1);
    }
}

export function getProductDatabase(): Product[] {
    return productDatabase;
}
