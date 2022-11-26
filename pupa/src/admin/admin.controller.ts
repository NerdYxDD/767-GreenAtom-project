import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';

import { AuthService } from '../auth/auth.service';
import { AdminService } from './admin.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

import {
  AdminWithoutPassword,
  FullAdmin,
  LoginAdmin,
  NewAdmin,
} from '../dtos/admin.dto';
import { JWTPayload } from '../auth/auth.types';
import { permissionChecker } from '../auth/auth.utils';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  create(@Body() admin: NewAdmin, user: JWTPayload): Promise<FullAdmin> {
    permissionChecker(user?.roleId);

    const { email, password, username, lastName, firstName } = admin;
    if (!email || !password || !username || !lastName || !firstName) {
      throw new HttpException(
        'Все поля должны быть заполнены',
        HttpStatus.BAD_REQUEST,
      );
    }
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

  @Get('/current')
  @UseGuards(JwtAuthGuard)
  async getEventListeners(
    @Request() { user }: { user: JWTPayload },
  ): Promise<AdminWithoutPassword> {
    permissionChecker(user?.roleId);
    return await this.adminService.findOneAdminWtPass(user.email);
  }
}
