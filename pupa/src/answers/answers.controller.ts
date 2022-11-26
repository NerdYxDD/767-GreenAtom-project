import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { JWTPayload } from 'src/auth/auth.types';
import { permissionChecker } from 'src/auth/auth.utils';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AnswerCreate } from 'src/dtos/answer.dto';
import { Answers } from 'src/models/answers.model';
import { AnswersService } from './answers.service';

@Controller('answers')
export class AnswersController {
  constructor(private readonly answerService: AnswersService) {}
//   @UseGuards(JwtAuthGuard)
  @Post('/create')
  async createAnswer(
    @Body() answer: AnswerCreate,
    // @Request() user: JWTPayload,
  ) {
    // permissionChecker(user?.roleId);
    return await this.answerService.create(answer);
  }
}
