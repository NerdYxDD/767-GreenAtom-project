import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { CreateEvent, FullEvent } from 'src/dtos/event.dto';
import { InjectModel } from '@nestjs/sequelize';
import { RoomEvent } from 'src/models/event.model';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(RoomEvent)
    private readonly event: typeof RoomEvent,
  ) {}

  async createEvent(event: CreateEvent): Promise<FullEvent> {
    const code = Date.now().toString(36).slice(2, 8);
    const newEvent = {
      id: uuidv4(),
      code,
      title: event.title,
      ownerId: event.ownerId,
    };
    return await this.event.create(newEvent);
  }

  async getEvent(code): Promise<FullEvent[]> {
    return this.event.findAll({ where: { code } });
  }
}
