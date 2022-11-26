import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { QuizResult } from 'src/models/quizResult';
import { CheckingTestController } from './checking-test.controller';
import { CheckingTestService } from './checking-test.service';

@Module({
  imports: [SequelizeModule.forFeature([QuizResult])],
  controllers: [CheckingTestController],
  providers: [CheckingTestService],
})
export class CheckingTestModule {}
