import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { AuthModule } from '../auth/auth.module';

import { GuestController } from './guest.controller';
import { GuestService } from './guest.service';

import { Guest } from '../models/guest.model';
import { GuestEvent } from '../models/guest_event.model';
import { RoomEvent } from '../models/event.model';
import { EventsModule } from 'src/events/events.module';

@Module({
  imports: [
    SequelizeModule.forFeature([Guest, RoomEvent, GuestEvent]),
    AuthModule,
    EventsModule
  ],
  controllers: [GuestController],
  providers: [GuestService],
})
export class GuestModule {}
