import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FullGuest } from '../dtos/guest.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  // async validateUser(
  //   user: LoginUserFullDto,
  //   email: string,
  //   pass: string,
  // ): Promise<LoginUserWithoutPasswordDto | null> {
  //   const coincidePass = await checkPassword(pass, user.password);
  //   if (user && coincidePass) {
  //     return {
  //       id: user.id,
  //       email: user.email,
  //     };
  //   }
  //   throw new HttpException('Wrong password', HttpStatus.UNAUTHORIZED);
  // }

  // async login(user: any) {
  //   const payload = { username: user.email, sub: user.id };
  //   return {
  //     access_token: this.jwtService.sign(payload, {
  //       secret: this.configService.get('JWT_SECRET_KEY'),
  //     }),
  //   };
  // }

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
