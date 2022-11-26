import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { FullEvent } from 'src/dtos/event.dto';
import { EventsService } from './events.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('events')
export class EventsController {
  constructor(private readonly eventService: EventsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('')
  async createEvent(@Body() event: FullEvent): Promise<FullEvent> {
    return this.eventService.createEvent(event);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':code')
  getEventListeners(@Param('code') code: string): Promise<FullEvent[]> {
    return this.eventService.getEvent(code);
  }
}
