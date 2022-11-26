import { JwtService } from '@nestjs/jwt';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FullGuest } from '../dtos/guest.dto';
import { AdminWithoutPassword, FullAdmin, FullRole } from '../dtos/admin.dto';
import { checkPassword } from '../admin/admin.utils';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async validateUser(
    user: FullAdmin,
    email: string,
    pass: string,
  ): Promise<AdminWithoutPassword | null> {
    const coincidePass = await checkPassword(pass, user.password);
    if (user && coincidePass) {
      const { email, id, username, role, lastName, firstName } = user;
      return { email, id, username, role, lastName, firstName };
    }
    throw new HttpException('Неверный пароль', HttpStatus.UNAUTHORIZED);
  }

  async loginAdmin(user: AdminWithoutPassword, role: FullRole) {
    const { id, username, email } = user;
    const payload = {
      username,
      sub: id,
      email,
      roleId: role.id,
      roleName: role.name,
    };
    return {
      access_token: `Bearer ${this.jwtService.sign(payload, {
        secret: this.configService.get('JWT_SECRET_KEY'),
      })}`,
    };
  }

  async newGuestToken(guest: FullGuest): Promise<{ access_token: string }> {
    const payload = {
      username: guest.username,
      sub: guest.id,
      email: guest.email,
    };
    return {
      access_token: `Bearer ${this.jwtService.sign(payload, {
        secret: this.configService.get('JWT_SECRET_KEY'),
      })}`,
    };
  }
}
