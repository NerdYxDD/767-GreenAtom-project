import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import dattebyo from './dattebyo/dattebyo';

import { GuestModule } from './guest/guest.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [dattebyo, ConfigModule.forRoot(), GuestModule, AdminModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
