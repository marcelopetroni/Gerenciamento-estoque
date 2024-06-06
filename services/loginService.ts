// Gerenciamento-estoque/services/loginService.ts

export interface Employee {
    id: number;
    username: string;
    password: string;
}

const employeeDatabase: Employee[] = [
    {
        id: 1,
        username: 'admin',
        password: 'password123'
    }
];

export function loginService(username: string, password: string): Employee | null {
    const employee = employeeDatabase.find(emp => emp.username === username && emp.password === password);
    return employee ? { ...employee } : null;
}
