import {
  Body,
  Controller,
  Get,
  Param,
  HttpException,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';

import { QuizService } from './quiz.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

import { permissionChecker } from '../auth/auth.utils';

import { JWTPayload } from '../auth/auth.types';
import { FullQuiz, PassedQuiz, QuizWtId } from '../dtos/quiz.dto';

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

  // something here is wrong
  @UseGuards(JwtAuthGuard)
  @Post('/pass')
  async passedQuiz(
    @Body() quiz: PassedQuiz,
    @Request() { user }: { user: JWTPayload },
  ) {
    permissionChecker(user?.roleId);

    const { id: quizId } = quiz;

    const existingQuiz = await this.quizService.findQuiz(quizId);
    if (!existingQuiz) {
      throw new HttpException('Не валидный опрос', HttpStatus.BAD_REQUEST);
    }

    await this.quizService.addQuizToPassed(quizId, user.sub);

    // to do save answers of a user

    return this.quizService.getAllPassedByGuest(user.sub);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:eventId')
  async getElementId(
    @Param('eventId') eventId: string,
    @Request() { user }: { user: JWTPayload },
  ) {
    permissionChecker(user?.roleId);

    console.log(eventId);
    return this.quizService.getQuizes(eventId);
  }
}
