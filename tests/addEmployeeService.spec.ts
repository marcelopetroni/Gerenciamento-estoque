// Test_2 - Verificar a funcionalidade do serviço de adição de funcionários (addEmployeeService)
import { addEmployeeService, getEmployeeDatabase, Employee } from '../services/addEmployeeService';

describe('Add Employee Service', () => { //Adicionar serviço de funcionário
    beforeEach(() => {
        // Limpar o "banco de dados" antes de cada teste
        (getEmployeeDatabase() as Employee[]).length = 0;
    });

    it('should add an employee successfully', () => { //deve adicionar um funcionário com sucesso
        const name = 'Alice';
        const position = 'Developer';
        const employee: Employee = addEmployeeService(name, position);

        expect(employee).toHaveProperty('id');
        expect(employee).toHaveProperty('name', name);
        expect(employee).toHaveProperty('position', position);

        const employees = getEmployeeDatabase();
        expect(employees).toContainEqual(employee);
    });

    it('should throw an error if name is not provided', () => { //deve gerar um erro se o nome não for fornecido
        const name = '';
        const position = 'Developer';

        expect(() => {
            addEmployeeService(name, position);
        }).toThrow('Name and position are required');
    });

    it('should throw an error if position is not provided', () => { //deve gerar um erro se a posição não for fornecida
        const name = 'Alice';
        const position = '';

        expect(() => {
            addEmployeeService(name, position);
        }).toThrow('Name and position are required');
    });
});



