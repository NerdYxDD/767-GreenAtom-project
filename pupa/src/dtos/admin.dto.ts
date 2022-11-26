class Admin {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  username: string;
  role: number;
}

export type FullAdmin = Admin;
export type NewAdmin = Omit<Admin, 'id'>;
export type AdminWithoutPassword = Omit<Admin, 'password'>;
export type LoginAdmin = Pick<Admin, 'email' | 'password'>;

class Role {
  id: number;
  name: string;
}

export type FullRole = Role;
