// loginService.ts

export interface Employee {
    username: string;
    password: string;
}

const employeesDatabase: Employee[] = [
    { username: 'admin', password: 'password123' },
    // Adicione mais funcionários conforme necessário
];

export function loginService(username: string, password: string): Employee | null {
    // Verificar se as credenciais correspondem a algum funcionário no banco de dados
    const employee = employeesDatabase.find(emp => emp.username === username && emp.password === password);
    return employee ? { ...employee } : null;
}
