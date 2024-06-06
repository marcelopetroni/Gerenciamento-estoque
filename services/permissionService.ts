// Gerenciamento-estoque/services/permissionService.ts

export enum Permission {
    ADMIN = 'admin',
    MANAGER = 'manager',
    EMPLOYEE = 'employee'
}

export interface User {
    id: number;
    username: string;
    permission: Permission;
}

const userDatabase: User[] = [
    {
        id: 1,
        username: 'admin',
        permission: Permission.ADMIN
    },
    {
        id: 2,
        username: 'manager',
        permission: Permission.MANAGER
    },
    {
        id: 3,
        username: 'employee',
        permission: Permission.EMPLOYEE
    }
];

export function hasPermission(username: string, requiredPermission: Permission): boolean {
    const user = userDatabase.find(user => user.username === username);
    return !!user && user.permission === requiredPermission;
}
