import { Body, Controller, Post, Request } from '@nestjs/common';

import { QuizService } from './quiz.service';
import { permissionChecker } from '../auth/auth.utils';
import { NewGuest } from '../dtos/guest.dto';
import { JWTPayload } from '../auth/auth.types';

@Controller('quiz')
export class QuizController {
  constructor(
    private readonly quizService: QuizService,
    private readonly questionService: QuizService,
  ) {}

  @Post('/create')
  async create(
    @Body() guest: NewGuest,
    @Request() { user }: { user: JWTPayload },
  ) {
    permissionChecker(user?.roleId);
  }
}
