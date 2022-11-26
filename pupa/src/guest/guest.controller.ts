import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';

import { GuestService } from './guest.service';

import { FullGuest, NewGuest } from '../dtos/guest.dto';
import { AuthService } from '../auth/auth.service';

@Controller('guest')
export class GuestController {
  constructor(
    private readonly guestService: GuestService,
    private readonly authService: AuthService,
  ) {}

  @Post('/create')
  async create(@Body() guest: NewGuest): Promise<{ access_token: string }> {
    if (!guest.email || !guest.username) {
      throw new HttpException(
        'Все поля должны быть заполнены!',
        HttpStatus.UNAUTHORIZED,
      );
    }

    let resGuest: FullGuest;

    const oldGuest = await this.guestService.findGuest(guest.email);

    if (!oldGuest) {
      resGuest = await this.guestService.newGuest(guest);
    } else resGuest = { ...oldGuest };

    return this.authService.newGuestToken({ ...resGuest });
  }
}
