// Gerenciamento-estoque/services/confirmDeleteUserService.ts

export interface User {
    id: string;
    name: string;
    email: string;
}

let userDatabase: User[] = [
    { id: '1', name: 'John Doe', email: 'john.doe@example.com' },
    { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: '3', name: 'Alice Johnson', email: 'alice.johnson@example.com' }
];

export function confirmDeleteUser(userId: string): void {
    const index = userDatabase.findIndex(user => user.id === userId);
    if (index !== -1) {
        userDatabase.splice(index, 1);
    }
}

export function getUserDatabase(): User[] {
    return userDatabase;
}
