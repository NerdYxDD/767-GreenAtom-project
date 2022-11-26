import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { EventsController } from './events.controller';
import { EventsService } from './events.service';

import { RoomEvent } from 'models/event.model';
import { Quiz } from '../../models/quiz.model';

@Module({
  imports: [SequelizeModule.forFeature([RoomEvent, Quiz])],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
