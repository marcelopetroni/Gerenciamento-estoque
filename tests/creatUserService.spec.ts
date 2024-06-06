// Test_1 - Verificar a funcionalidade do serviço de criação de usuários (createUserService)

import { createUserService, User } from '../services/createUserService';

describe('Create User Service', () => { //Criar serviço de usuário
    it('should create a new user with valid name and email', () => { //deve criar um novo usuário com nome e email válidos
        const name = 'John Doe';
        const email = 'john.doe@example.com';
        const user: User = createUserService(name, email);
        
        expect(user).toHaveProperty('id');
        expect(user).toHaveProperty('name', name);
        expect(user).toHaveProperty('email', email);
    });

    it('should throw an error if name is not provided', () => { //deve gerar um erro se o nome não for fornecido
        const name = '';
        const email = 'john.doe@example.com';
        
        expect(() => {
            createUserService(name, email);
        }).toThrow('Name and email are required');
    });

    it('should throw an error if email is not provided', () => { //'deve gerar um erro se o e-mail não for fornecido
        const name = 'John Doe';
        const email = '';
        
        expect(() => {
            createUserService(name, email);
        }).toThrow('Name and email are required');
    });
});
