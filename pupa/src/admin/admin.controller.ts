import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';

import { AuthService } from '../auth/auth.service';
import { AdminService } from './admin.service';

import { FullAdmin, LoginAdmin, NewAdmin } from '../dtos/admin.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly authService: AuthService,
  ) {}

  // @UseGuards(JwtAuthGuard)
  @Post('/create')
  create(@Body() admin: NewAdmin): Promise<FullAdmin> {
    return this.adminService.create(admin);
  }

  @Post('/login')
  async login(
    @Body() { email, password }: LoginAdmin,
  ): Promise<{ access_token: string }> {
    const admin = await this.adminService.findOneAdmin(email);

    if (!admin) {
      throw new HttpException(
        'Отсутствует пользователь с почтой: ' + email,
        HttpStatus.UNAUTHORIZED,
      );
    }

    const validatedUser = await this.authService.validateUser(
      admin,
      email,
      password,
    );

    const role = await this.adminService.findRole(admin.role);

    return this.authService.loginAdmin(validatedUser, role);
  }
}
