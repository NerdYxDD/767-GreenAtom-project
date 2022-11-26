import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';

import { EventsService } from './events.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

import { JWTPayload } from '../auth/auth.types';
import { FullEvent } from 'src/dtos/event.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly eventService: EventsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('')
  async createEvent(
    @Body() event: FullEvent,
    @Request() user: JWTPayload,
  ): Promise<FullEvent> {
    if (!user?.roleId) {
      throw new HttpException(
        'Нету доступа управлять событиями',
        HttpStatus.FORBIDDEN,
      );
    }
    return this.eventService.createEvent(event);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':code')
  getEventListeners(
    @Param('code') code: string,
    @Request() user: JWTPayload,
  ): Promise<FullEvent[]> {
    if (!user?.roleId) {
      throw new HttpException(
        'Нету доступа управлять событиями',
        HttpStatus.FORBIDDEN,
      );
    }
    return this.eventService.getEvent(code);
  }
}
