// Gerenciamento-estoque/services/productFormService.ts

export interface ProductFormData {
    name: string;
    code: string;
    description: string;
    price: number;
}

export function createProductForm(): ProductFormData {
    return {
        name: '',
        code: '',
        description: '',
        price: 0
    };
}
