/* Test_6 - verifica se o formulário retornado pela função é de fato vazio, ou seja, 
se todos os campos estão vazios e o preço é zero.*/

import { createProductForm, ProductFormData } from '../services/productFormService';

describe('Product Form Service', () => {
    it('should create an empty product form', () => {
        const emptyForm: ProductFormData = {
            name: '',
            code: '',
            description: '',
            price: 0
        };

        const productForm: ProductFormData = createProductForm();

        expect(productForm).toEqual(emptyForm);
    });
});
