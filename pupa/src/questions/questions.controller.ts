import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JWTPayload } from 'src/auth/auth.types';
import { permissionChecker } from 'src/auth/auth.utils';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AnswerCreate } from 'src/dtos/answer.dto';
import { QuestionCreate } from 'src/dtos/question.dto';
import { Answers } from 'src/models/answers.model';
import { Questions } from 'src/models/questions.models';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionService: QuestionsService) {}
  @UseGuards(JwtAuthGuard)
  @Post('/create')
  async createAnswer(
    @Body() question: QuestionCreate,
    @Request() { user }: { user: JWTPayload },
  ) {
    permissionChecker(user?.roleId);
    return await this.questionService.create(question);
  }

  @Get()
  async getAll(): Promise<Questions[]> {
    return await this.questionService.getAllQuestions();
  }

  @Get('/:quizId')
  async getQuestionByQuizId(
    @Param('quizId') quizId: string,
  ): Promise<Questions[]> {
    return await this.questionService.getQuestionsByQuizId(quizId);
  }
}
