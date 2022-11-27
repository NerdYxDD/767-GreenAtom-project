import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { v4 as uuidv4 } from 'uuid';
import { Questions } from 'src/models/questions.models';
import { QuestionCreate } from 'src/dtos/question.dto';
import { text } from 'stream/consumers';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel(Questions)
    private readonly question: typeof Questions,
  ) {}
  async create(question: QuestionCreate): Promise<Questions> {
    const { text, quizId } = question;
    const newQuestions = await this.question.create({
      id: uuidv4(),
      text,
      quizId,
    });

    return newQuestions;
  }

  async getAllQuestions(): Promise<Questions[]> {
    const questions = await this.question.findAll();

    return questions;
  }

  async getQuestionByText(text: string): Promise<Questions> {
    const questions = await this.question.findOne({ where: { text } });

    return questions;
  }

  async getQuestionsByQuizId(quizId: string): Promise<Questions[]> {
    const questions = await this.question.findAll({
      where: {
        quizId,
      },
    });

    return questions;
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
