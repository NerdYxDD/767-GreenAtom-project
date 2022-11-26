import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { AuthModule } from '../auth/auth.module';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';

import { Quiz } from '../models/quiz.model';
import { Answers } from '../models/answers.model';
import { Questions } from '../models/questions.models';
import { RoomEvent } from '../models/event.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Quiz, Questions, Answers, RoomEvent]),
    AuthModule,
  ],
  controllers: [QuizController],
  providers: [QuizService],
})
export class QuizModule {}
