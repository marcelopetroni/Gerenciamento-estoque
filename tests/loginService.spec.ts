/*Test_3 - verificar se o nome de usuário e a senha fornecidos correspondem a 
algum funcionário válido no banco de dados*/


import { loginService, Employee } from '../services/loginService';

describe('Login Service', () => {  //Serviço de login'
    it('should return the employee if credentials are valid', () => { //deve devolver o funcionário se as credenciais forem válidas
        const validUsername = 'admin';
        const validPassword = 'password123';

        const employee: Employee | null = loginService(validUsername, validPassword);

        expect(employee).toBeTruthy();
        expect(employee?.username).toBe(validUsername);
        expect(employee?.password).toBe(validPassword);
    });

    it('should return null if username is invalid', () => { //deve retornar nulo se o nome de usuário for inválido
        const invalidUsername = 'invalid';
        const validPassword = 'password123';

        const employee: Employee | null = loginService(invalidUsername, validPassword);

        expect(employee).toBeNull();
    });

    it('should return null if password is invalid', () => { //deve retornar nulo se a senha for inválida
        const validUsername = 'admin';
        const invalidPassword = 'invalid';

        const employee: Employee | null = loginService(validUsername, invalidPassword);

        expect(employee).toBeNull();
    });

    it('should return null if both username and password are invalid', () => { //deve retornar nulo se o nome de usuário e a senha forem inválidos
        const invalidUsername = 'invalid';
        const invalidPassword = 'invalid';

        const employee: Employee | null = loginService(invalidUsername, invalidPassword);

        expect(employee).toBeNull();
    });
});
