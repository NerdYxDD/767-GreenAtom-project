import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';

import { EventsService } from './events.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

import { JWTPayload } from '../auth/auth.types';
import { CreateEvent, FullEvent } from 'src/dtos/event.dto';
import { permissionChecker } from '../auth/auth.utils';

@Controller('events')
export class EventsController {
  constructor(private readonly eventService: EventsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('')
  async createEvent(
    @Body() event: CreateEvent,
    @Request() user: JWTPayload,
  ): Promise<FullEvent> {
    permissionChecker(user?.roleId);
    return this.eventService.createEvent(event);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':code')
  getEventListeners(
    @Param('code') code: string,
    @Request() user: JWTPayload,
  ): Promise<FullEvent[]> {
    permissionChecker(user?.roleId);
    return this.eventService.getEvent(code);
  }
}
