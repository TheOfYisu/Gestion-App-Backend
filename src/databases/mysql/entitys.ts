import { ConceptsEntity } from './entitys/concepts.entity';
import { DataEntity } from './entitys/data.entity';
import { DataCompanyEntity } from './entitys/data_company.entity';
import { DepartmentEntity } from './entitys/department.entity';
import { ModulesEntity } from './entitys/module.entity';
import { PositionEntity } from './entitys/position.entity';
import { RolEntity } from './entitys/rol.entity';
import { TypeFileEntity } from './entitys/type_file.entity';
import { UsersEntity } from './entitys/user.entity';
import { UserFilesEntity } from './entitys/user_files.entity';
import { UserXRoleEntity } from './entitys/userxrol.entity';
import { UserXRolexModEntity } from './entitys/userxrolxmod.entity';

export const EntitysAllMySQL = [
  ModulesEntity,
  UsersEntity,
  RolEntity,
  UserXRoleEntity,
  UserXRolexModEntity,
  DataEntity,
  ConceptsEntity,
  DataCompanyEntity,
  DepartmentEntity,
  PositionEntity,
  TypeFileEntity,
  UserFilesEntity,
];
