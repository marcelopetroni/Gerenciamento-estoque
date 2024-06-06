/* Test_5 - verifica se um usuário possui uma permissão específica com base
 no nome de usuário e na permissão requerida.*/
 
import { hasPermission, Permission } from '../services/permissionService';

describe('Permission Service', () => { //Serviço de permissão
    it('should return true if user has required permission', () => { //deve retornar verdadeiro se o usuário tiver exigido permissão
        const username = 'admin';
        const requiredPermission = Permission.ADMIN;

        const hasAccess: boolean = hasPermission(username, requiredPermission);


        expect(hasAccess).toBe(true);
    });

    it('should return false if user does not have required permission', () => { //deve retornar falso se o usuário não tiver permissão necessária
        const username = 'employee';
        const requiredPermission = Permission.ADMIN;

        const hasAccess: boolean = hasPermission(username, requiredPermission);

        expect(hasAccess).toBe(false);
    });

    it('should return false if user does not exist', () => { //deve retornar falso se o usuário não existir
        const username = 'nonexistent';
        const requiredPermission = Permission.ADMIN;

        const hasAccess: boolean = hasPermission(username, requiredPermission);

        expect(hasAccess).toBe(false);
    });
});


