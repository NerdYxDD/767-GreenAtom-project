import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import dattebyo from './dattebyo/dattebyo';

import { GuestModule } from './guest/guest.module';
import { AdminModule } from './admin/admin.module';
import { EventsModule } from './events/events.module';
import { QuizModule } from './quiz/quiz.module';
import { CheckingTestModule } from './checking-test/checking-test.module';

@Module({
  imports: [
    dattebyo,
    ConfigModule.forRoot(),
    GuestModule,
    AdminModule,
    EventsModule,
    QuizModule,
    CheckingTestModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
