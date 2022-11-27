import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { v4 as uuidv4 } from 'uuid';

import { ResultDto } from 'src/dtos/checkResult.dto';
import { Answers } from 'src/models/answers.model';
import { QuizResult } from 'src/models/quizResult';

@Injectable()
export class CheckingTestService {
  constructor(
    @InjectModel(QuizResult)
    private readonly quizResult: typeof QuizResult,
  ) {}
  async getResult(result: ResultDto, id: string): Promise<QuizResult> {
    let pointsReceived = 0;

    result.answers.map((element: Answers) => {
      element.IsRight ? (pointsReceived += 1) : (pointsReceived += 0);
    });

    return await this.quizResult.create({
      id: uuidv4(),
      quizId: result.quizId,
      userId: id,
      pointsScored: pointsReceived,
      pointsPossible: result.answers.length,
    });
  }
}
