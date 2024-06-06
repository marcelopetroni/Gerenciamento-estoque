//Test_9 - Verifica se o usuário é excluído com sucesso e se o banco de dados é atualizado corretamente.

import { confirmDeleteUser, getUserDatabase } from '../services/confirmDeleteUserService';

describe('Confirm Delete User Service', () => {
    beforeEach(() => {
        // Reinicializa o banco de dados antes de cada teste
        const initialDatabase = [
            { id: '1', name: 'John Doe', email: 'john.doe@example.com' },
            { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com' },
            { id: '3', name: 'Alice Johnson', email: 'alice.johnson@example.com' }
        ];
        (getUserDatabase() as any[]).splice(0, getUserDatabase().length, ...initialDatabase);
    });

    it('should confirm the deletion of a user', () => {
        const userIdToDelete = '2';
        confirmDeleteUser(userIdToDelete);

        const updatedDatabase = getUserDatabase();
        const deletedUser = updatedDatabase.find(user => user.id === userIdToDelete);

        expect(deletedUser).toBeUndefined();
        expect(updatedDatabase.length).toBe(2);
    });

    it('should not delete anything if user does not exist', () => {
        const nonExistingUserId = '4';
        confirmDeleteUser(nonExistingUserId);

        const updatedDatabase = getUserDatabase();

        expect(updatedDatabase.length).toBe(3);
    });
});
