import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { JWTPayload } from 'src/auth/auth.types';
import { permissionChecker } from 'src/auth/auth.utils';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ResultDto } from 'src/dtos/checkResult.dto';
import { QuizResult } from 'src/models/quizResult';
import { CheckingTestService } from './checking-test.service';

@Controller('checking-test')
export class CheckingTestController {
  constructor(private readonly checkingTest: CheckingTestService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  async createEvent(
    @Body() result: ResultDto,
    @Request() { user }: { user: JWTPayload },
  ): Promise<QuizResult> {
    permissionChecker(user?.roleId);
    return await this.checkingTest.getResult(result, user.sub);
  }
}
