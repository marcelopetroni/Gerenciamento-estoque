// Teste_4 - Verifica se o serviço de adição de produto funciona corretamente.

import { addProductService, getProductDatabase, Product } from '../services/addProductService';

describe('Add Product Service', () => { //Adicionar serviço de produto
    beforeEach(() => {
        // Limpar o "banco de dados" antes de cada teste
        (getProductDatabase() as Product[]).length = 0;
    });

    it('should add a product successfully', () => { //deve adicionar um produto com sucesso
        const name = 'Product 1';
        const code = 'P001';
        const description = 'Description of Product 1';
        const price = 100;
        const product: Product = addProductService(name, code, description, price);

        expect(product).toHaveProperty('id');
        expect(product).toHaveProperty('name', name);
        expect(product).toHaveProperty('code', code);
        expect(product).toHaveProperty('description', description);
        expect(product).toHaveProperty('price', price);

        const products = getProductDatabase();
        expect(products).toContainEqual(product);
    });

    it('should throw an error if name is not provided', () => { //deve gerar um erro se o nome não for fornecido
        const name = '';
        const code = 'P001';
        const description = 'Description of Product 1';
        const price = 100;

        expect(() => {
            addProductService(name, code, description, price);
        }).toThrow('Product name, code, description, and price are required');
    });

    it('should throw an error if code is not provided', () => { //deve gerar um erro se o código não for fornecido
        const name = 'Product 1';
        const code = '';
        const description = 'Description of Product 1';
        const price = 100;

        expect(() => {
            addProductService(name, code, description, price);
        }).toThrow('Product name, code, description, and price are required');
    });

    it('should throw an error if description is not provided', () => { //deve gerar um erro se a descrição não for fornecida
        const name = 'Product 1';
        const code = 'P001';
        const description = '';
        const price = 100;

        expect(() => {
            addProductService(name, code, description, price);
        }).toThrow('Product name, code, description, and price are required');
    });

    it('should throw an error if price is not provided', () => { //deve gerar um erro se o preço não for fornecido
        const name = 'Product 1';
        const code = 'P001';
        const description = 'Description of Product 1';
        const price = null;

        expect(() => {
            addProductService(name, code, description, price);
        }).toThrow('Product name, code, description, and price are required');
    });
});
