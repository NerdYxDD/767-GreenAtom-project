export interface CreateAdminRbo {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  username: string;
}

export interface CreateAdminDto {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  username: string;
}

export interface LoginAdminRbo {
  password: string;
  email: string;
}

export interface LoginAdminDto {
  access_token: string;
}
