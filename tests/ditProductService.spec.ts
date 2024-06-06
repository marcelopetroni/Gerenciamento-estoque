/*Test_10 - Verifica se o produto é modificado corretamente e se o banco de dados 
é atualizado corretamente.*/

import { editProduct, getProductDatabase } from '../services/editProductService';

describe('Edit Product Service', () => {
    beforeEach(() => {
        // Reinicializa o banco de dados antes de cada teste
        const initialDatabase = [
            { id: '1', name: 'Product 1', code: 'P001', description: 'Description of Product 1', price: 10 },
            { id: '2', name: 'Product 2', code: 'P002', description: 'Description of Product 2', price: 20 },
            { id: '3', name: 'Product 3', code: 'P003', description: 'Description of Product 3', price: 30 }
        ];
        (getProductDatabase() as any[]).splice(0, getProductDatabase().length, ...initialDatabase);
    });

    it('should allow modification of relevant fields of a product', () => {
        const productIdToUpdate = '2';
        const updatedProduct = {
            id: productIdToUpdate,
            name: 'Updated Product',
            code: 'P002',
            description: 'Updated Description',
            price: 25
        };
        editProduct(updatedProduct);

        const updatedDatabase = getProductDatabase();
        const modifiedProduct = updatedDatabase.find(product => product.id === productIdToUpdate);

        expect(modifiedProduct).toEqual(updatedProduct);
    });

    it('should not modify anything if product does not exist', () => {
        const nonExistingProductId = '4';
        const updatedProduct = {
            id: nonExistingProductId,
            name: 'New Product',
            code: 'P004',
            description: 'New Description',
            price: 40
        };
        editProduct(updatedProduct);

        const updatedDatabase = getProductDatabase();

        expect(updatedDatabase.length).toBe(3);
    });
});
