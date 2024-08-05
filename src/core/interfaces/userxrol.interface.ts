import { getUserI } from './user.interface';
import { getRolI } from './rol.interface';

export interface UserxRolI {
  id: number;
  id_users: getUserI;
  id_rol: getRolI;
  status: number;
}

export interface getUserxRolI extends UserxRolI {
  created_at: Date;
  updated_at: Date;
}

export interface getsUserxRolI {
  userxrol: getUserxRolI[];
}
