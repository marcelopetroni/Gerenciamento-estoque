/*Test_11 - verifica se os detalhes do produto são atualizados corretamente e se o banco 
de dados é atualizado corretamente.*/

import { updateProductDetails, getProductDatabase } from '../services/updateProductDetailsService';

describe('Update Product Details Service', () => {
    beforeEach(() => {
        // Reinicializa o banco de dados antes de cada teste
        const initialDatabase = [
            { id: '1', name: 'Product 1', code: 'P001', description: 'Description of Product 1', price: 10 },
            { id: '2', name: 'Product 2', code: 'P002', description: 'Description of Product 2', price: 20 },
            { id: '3', name: 'Product 3', code: 'P003', description: 'Description of Product 3', price: 30 }
        ];
        (getProductDatabase() as any[]).splice(0, getProductDatabase().length, ...initialDatabase);
    });

    it('should update product details correctly', () => {
        const productIdToUpdate = '2';
        const updatedDetails = {
            name: 'Updated Product',
            description: 'Updated Description',
            price: 25
        };
        updateProductDetails(productIdToUpdate, updatedDetails);

        const updatedDatabase = getProductDatabase();
        const modifiedProduct = updatedDatabase.find(product => product.id === productIdToUpdate);

        expect(modifiedProduct).toEqual({
            id: productIdToUpdate,
            name: 'Updated Product',
            code: 'P002',
            description: 'Updated Description',
            price: 25
        });
    });

    it('should not update anything if product does not exist', () => {
        const nonExistingProductId = '4';
        const updatedDetails = {
            name: 'New Product',
            description: 'New Description',
            price: 40
        };
        updateProductDetails(nonExistingProductId, updatedDetails);

        const updatedDatabase = getProductDatabase();

        expect(updatedDatabase.length).toBe(3);
    });
});
