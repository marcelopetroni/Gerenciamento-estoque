// Gerenciamento-estoque/services/addEmployeeService.ts
export interface Employee {
    id: number;
    name: string;
    position: string;
}

let employeeDatabase: Employee[] = [];

export function addEmployeeService(name: string, position: string): Employee {
    if (!name || !position) {
        throw new Error('Name and position are required');
    }
    const newEmployee: Employee = {
        id: Date.now(),
        name,
        position
    };
    employeeDatabase.push(newEmployee);
    return newEmployee;
}

export function getEmployeeDatabase(): Employee[] {
    return employeeDatabase;
}
