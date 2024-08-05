export interface RolI {
  id: number;
  name: string;
  description: string;
}

export interface getRolI extends RolI {
  created_at: Date;
  updated_at: Date;
}

export interface getRolsI {
  roles: getRolI[];
}
