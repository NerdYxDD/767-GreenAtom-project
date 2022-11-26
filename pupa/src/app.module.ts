import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import dattebyo from './dattebyo/dattebyo';

import { GuestModule } from './guest/guest.module';
import { AdminModule } from './admin/admin.module';
import { EventsModule } from './events/events.module';
import { QuizModule } from './quiz/quiz.module';
import { QuestionsModule } from './questions/questions.module';
import { AnswersModule } from './answers/answers.module';
import { FormForTestModule } from './form_for_test/form_for_test.module';

@Module({
  imports: [
    dattebyo,
    ConfigModule.forRoot(),
    GuestModule,
    AdminModule,
    EventsModule,
    QuizModule,
    QuestionsModule,
    AnswersModule,
    FormForTestModule,
    CheckingTestModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
