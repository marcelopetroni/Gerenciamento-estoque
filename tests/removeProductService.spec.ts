/*Test_8 - verifica se o produto é removido com sucesso e se o banco de dados é 
atualizado corretamente.*/

import { removeProduct, getProductDatabase } from '../services/removeProductService';

describe('Remove Product Service', () => { //Remover serviço do produto
    beforeEach(() => {
        // Reinicializa o banco de dados antes de cada teste
        const initialDatabase = [
            { id: '1', name: 'Product A', quantity: 10 },
            { id: '2', name: 'Product B', quantity: 20 },
            { id: '3', name: 'Product C', quantity: 15 }
        ];
        (getProductDatabase() as any[]).splice(0, getProductDatabase().length, ...initialDatabase);
    });

    it('should remove a product successfully', () => { //deve remover um produto com sucesso
        const productIdToRemove = '2';
        removeProduct(productIdToRemove);

        const updatedDatabase = getProductDatabase();
        const removedProduct = updatedDatabase.find(product => product.id === productIdToRemove);

        expect(removedProduct).toBeUndefined();
        expect(updatedDatabase.length).toBe(2);
    });

    it('should not remove anything if product does not exist', () => { //não deve remover nada se o produto não existir
        const nonExistingProductId = '4';
        removeProduct(nonExistingProductId);

        const updatedDatabase = getProductDatabase();

        expect(updatedDatabase.length).toBe(3);
    });
});
