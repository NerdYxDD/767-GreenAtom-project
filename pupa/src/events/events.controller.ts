import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
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
  @Post('/create')
  async createEvent(
    @Body() event: CreateEvent,
    @Request() { user }: { user: JWTPayload },
  ): Promise<FullEvent[]> {
    permissionChecker(user?.roleId);
    return this.eventService.createEvent(event, user.sub);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/getEventByCode/:code')
  getEventListeners(
    @Param('code') code: string,
    @Request() { user }: { user: JWTPayload },
  ): Promise<FullEvent> {
    permissionChecker(user?.roleId);

    return this.eventService.getEvent(code);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/active-events')
  getActiveEvent(
    @Request() { user }: { user: JWTPayload },
  ): Promise<FullEvent[]> {
    permissionChecker(user?.roleId);
    return this.eventService.getActiveEvent(user.sub);
  }

  @UseGuards(JwtAuthGuard)
  @Put('changeStatus/:id')
  changeStatusEvent(
    @Param('id') id: string,
    @Request() { user }: { user: JWTPayload },
  ): Promise<FullEvent[]> {
    permissionChecker(user?.roleId);
    return this.eventService.changeStatus(id, user?.sub);
  }
}
