import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';

import { GuestService } from './guest.service';

import { FullGuest, NewGuest } from '../dtos/guest.dto';
import { AuthService } from '../auth/auth.service';
import { EventsService } from 'src/events/events.service';

@Controller('guest')
export class GuestController {
  constructor(
    private readonly guestService: GuestService,
    private readonly eventService: EventsService,
    private readonly authService: AuthService,
  ) {}

  @Post('/create?')
  async create(@Query('code') code: string, @Body() guest: NewGuest) {
    try {
      if (!guest.email || !guest.username) {
        throw new HttpException(
          'Все поля должны быть заполнены!',
          HttpStatus.UNAUTHORIZED,
        );
      }

      let resGuest: FullGuest;

      const oldGuest = await this.guestService.findGuest(guest.email);
      const event = await this.eventService.getEvent(code);

      if (!oldGuest) {
        const fromDB = await this.guestService.newGuest(guest);
        resGuest = {
          email: fromDB.email,
          username: fromDB.username,
          id: fromDB.id,
        };
      } else {
        resGuest = {
          email: oldGuest.email,
          username: oldGuest.username,
          id: oldGuest.id,
        };
      }
      const token = await this.authService.newGuestToken({ ...resGuest });

      if (code) {
        const eventId = event.id;

        const result = {
          token: token.access_token,
          eventId,
        };

        return result;
      } else return token;
    } catch (error) {
      throw new HttpException(`${error}`, HttpStatus.BAD_REQUEST);
    }
  }
}
