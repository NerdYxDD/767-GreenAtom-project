import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { AuthModule } from '../auth/auth.module';

import { GuestController } from './guest.controller';
import { GuestService } from './guest.service';

import { Guest } from '../models/guest.model';

@Module({
  imports: [SequelizeModule.forFeature([Guest]), AuthModule],
  controllers: [GuestController],
  providers: [GuestService],
})
export class GuestModule {}
