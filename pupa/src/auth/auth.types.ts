export interface JWTPayload {
  sub: string;
  username: string;
  roleId?: number;
  roleName?: string;
  email: string;
}
