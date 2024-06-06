// Gerenciamento-estoque/services/createUserService.ts
export interface User {
    id: number;
    name: string;
    email: string;
}

export function createUserService(name: string, email: string): User {
    if (!name || !email) {
        throw new Error('Name and email are required');
    }
    return {
        id: Date.now(),  // Simulando um ID único baseado no timestamp atual
        name: name,
        email: email
    };
}
