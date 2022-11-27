import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { EventsController } from './events.controller';
import { EventsService } from './events.service';

import { RoomEvent } from 'src/models/event.model';
import { Quiz } from '../models/quiz.model';
import { Answers } from '../models/answers.model';
import { Questions } from '../models/questions.models';

@Module({
  imports: [SequelizeModule.forFeature([RoomEvent, Quiz, Answers, Questions])],
  controllers: [EventsController],
  providers: [EventsService],
  exports: [EventsService],
})
export class EventsModule {}
