import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import dattebyo from './dattebyo/dattebyo';

import { GuestModule } from './guest/guest.module';

@Module({
  imports: [dattebyo, ConfigModule.forRoot(), GuestModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
