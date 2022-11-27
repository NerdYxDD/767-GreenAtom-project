import { IsEmail, IsNotEmpty, IsUUID } from 'class-validator';

class Admin {
  @IsUUID(4)
  id: string;
  
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  firstName: string;
  lastName: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
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
