import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Quiz } from '../models/quiz.model';

@Injectable()
export class QuizService {
  constructor(
    @InjectModel(Quiz)
    private readonly quiz: typeof Quiz,
  ) {}
}
