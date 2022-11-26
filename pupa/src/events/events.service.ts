import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { CreateEvent, FullEvent } from 'src/dtos/event.dto';
import { InjectModel } from '@nestjs/sequelize';
import { RoomEvent } from 'src/models/event.model';
import { Op } from 'sequelize';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(RoomEvent)
    private readonly event: typeof RoomEvent,
  ) {}

  async createEvent(event: CreateEvent, userId: string): Promise<FullEvent> {
    const code = Date.now().toString(36).slice(2, 8);
    const newEvent = {
      id: uuidv4(),
      code,
      title: event.title,
      ownerId: userId,
    };
    return await this.event.create(newEvent);
  }

  async getEvent(code: string): Promise<FullEvent[]> {
    return await this.event.findAll({ where: { code } });
  }

  async getActiveEvent(id: string): Promise<FullEvent[]> {
    return await this.event.findAll({
      where: {
        [Op.and]: [{ id }, { active: true }],
      },
    });
  }
  async changeStatus(id: string): Promise<FullEvent> {
    await this.event.update(
      {
        active: false,
      },
      { where: { id } },
    );

    return await this.event.findOne({ where: { id } });
  }
}
