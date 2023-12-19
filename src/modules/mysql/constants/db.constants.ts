import { RolEntity } from '../entitys/rol.entity';
import { UserEntity } from '../entitys/users.entity';
import { UserXRoleEntity } from '../entitys/userxrol.entity';

export function GetMySQLConfig() {
  return {
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '0123456789',
    database: 'gestionapppro',
    entities: [UserEntity, RolEntity, UserXRoleEntity],
    synchronize: false,
  };
}
