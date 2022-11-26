import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';

import { QuizService } from './quiz.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

import { permissionChecker } from '../auth/auth.utils';

import { JWTPayload } from '../auth/auth.types';
import { FullQuiz, QuizWtId } from '../dtos/quiz.dto';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  async create(
    @Body() quiz: QuizWtId,
    @Request() { user }: { user: JWTPayload },
  ): Promise<FullQuiz[]> {
    permissionChecker(user?.roleId);

    const { title, eventId } = quiz;
    if (!title) {
      throw new HttpException('Название должно быть', HttpStatus.BAD_REQUEST);
    }

    const event = await this.quizService.findEvent(eventId);
    if (!event) {
      throw new HttpException('Не валидное событие', HttpStatus.BAD_REQUEST);
    }

    return this.quizService.createQuiz(quiz);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:eventId')
  async getQuizes(
    @Param('eventId') eventId: string,
    @Request() { user }: { user: JWTPayload },
  ): Promise<FullQuiz[]> {
    permissionChecker(user?.roleId);
    return await this.quizService.getQuizes(eventId);
  }
}
