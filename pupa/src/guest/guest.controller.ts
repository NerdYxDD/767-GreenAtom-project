import { Body, Controller, Post } from '@nestjs/common';

import { GuestService } from './guest.service';

import { NewGuest } from '../dtos/guest.dto';
import { AuthService } from '../auth/auth.service';

@Controller('guest')
export class GuestController {
  constructor(
    private readonly guestService: GuestService,
    private readonly authService: AuthService,
  ) {}

  @Post('/create')
  async create(@Body() guest: NewGuest): Promise<{ access_token: string }> {
    const { email, id, username } = await this.guestService.newGuest(guest);
    return this.authService.newGuestToken({ email, id, username });
  }
}
