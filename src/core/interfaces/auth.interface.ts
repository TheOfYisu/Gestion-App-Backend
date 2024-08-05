export interface AuthI {
  email: string;
  password: string;
}

export interface AuthResponseI {
  token: string;
  user: {
    id: number;
    name: string;
    lastname: string;
  };
  rol: [];
}
