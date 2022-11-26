import { Module } from '@nestjs/common';
import { AnswersModule } from 'src/answers/answers.module';
import { QuestionsModule } from 'src/questions/questions.module';
import { FormForTestController } from './form_for_test.controller';
import { FormForTestService } from './form_for_test.service';

@Module({
  imports: [AnswersModule, QuestionsModule],
  controllers: [FormForTestController],
  providers: [FormForTestService],
})
export class FormForTestModule {}
