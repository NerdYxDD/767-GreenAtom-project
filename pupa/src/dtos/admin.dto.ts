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
export type NewAdmin = Omit<Admin, 'id' | 'role'>;
export type AdminWithoutPassword = Omit<Admin, 'password'>;
export type LoginAdmin = Pick<Admin, 'email' | 'password'>;
export type NewCreatedUser = Omit<Admin, 'password' | 'role'>;

class Role {
  id: number;
  name: string;
}

export type FullRole = Role;
