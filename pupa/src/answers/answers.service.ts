import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { v4 as uuidv4 } from 'uuid';
import { AnswerCreate } from 'src/dtos/answer.dto';
import { Answers } from 'src/models/answers.model';

@Injectable()
export class AnswersService {
  constructor(
    @InjectModel(Answers)
    private readonly answers: typeof Answers,
  ) {}
  async create(answer: AnswerCreate): Promise<Answers> {
    const { IsRight, text, questionId } = answer;
    const newAnswer = await this.answers.create({
      id: uuidv4(),
      IsRight,
      text,
      questionId,
    });

    return newAnswer;
  }

  async getAllAnswers(): Promise<Answers[]> {
    const answers = await this.answers.findAll();

    return answers;
  }

  async getAnswersByQuestionsId(questionId: string): Promise<Answers[]> {
    const answers = await this.answers.findAll({
      where: {
        questionId,
      },
    });

    return answers;
  }

//   async changeAnswer(data, id: string): Promise<Answers> {
//     const updateAnswer = await this.answers.update(
//       {
//         ...data,
//       },
//       { where: { id } },
//     );

//     return updateAnswer;
//   }
}
