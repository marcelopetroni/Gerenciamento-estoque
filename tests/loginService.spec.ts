/*Test_3 - verificar se o nome de usuário e a senha fornecidos correspondem a 
algum funcionário válido no banco de dados*/


import { loginService, Employee } from '../services/loginService';

describe('Login Service', () => {
    it('should return the employee if credentials are valid', () => {
        const validUsername = 'admin';
        const validPassword = 'password123';

        const employee: Employee | null = loginService(validUsername, validPassword);

        expect(employee).toBeTruthy();
        expect(employee?.username).toBe(validUsername);
        expect(employee?.password).toBe(validPassword);
    });

    it('should return null if username is invalid', () => {
        const invalidUsername = 'invalid';
        const validPassword = 'password123';

        const employee: Employee | null = loginService(invalidUsername, validPassword);

        expect(employee).toBeNull();
    });

    it('should return null if password is invalid', () => {
        const validUsername = 'admin';
        const invalidPassword = 'invalid';

        const employee: Employee | null = loginService(validUsername, invalidPassword);

        expect(employee).toBeNull();
    });

    it('should return null if both username and password are invalid', () => {
        const invalidUsername = 'invalid';
        const invalidPassword = 'invalid';

        const employee: Employee | null = loginService(invalidUsername, invalidPassword);

        expect(employee).toBeNull();
    });
});
