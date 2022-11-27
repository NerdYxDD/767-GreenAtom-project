import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AnswersService } from 'src/answers/answers.service';
import { AnswerCreate } from 'src/dtos/answer.dto';
import { FormDto } from 'src/dtos/form.dto';
import { QuestionCreate } from 'src/dtos/question.dto';
import { QuestionsService } from 'src/questions/questions.service';

@Injectable()
export class FormForTestService {
  constructor(
    private readonly answerService: AnswersService,
    private readonly questionsService: QuestionsService,
  ) {}
  async create(form: FormDto) {
    try {
      const question: QuestionCreate = { text: form.text, quizId: form.quizId };
      const isExists = await this.questionsService.getQuestionByText(
        question.text,
      );
      if (!isExists) {
        const newQuestion = await this.questionsService.create(question);
        const newAnswer = await form.answers.map((element: AnswerCreate) => {
          const answer = Object.assign(element);

          answer['questionId'] = newQuestion.id;
          this.answerService.create(answer);

          return 'Форма успешно загружена';
        });
      } else {
        throw new HttpException('Вопрос уже создан', HttpStatus.BAD_REQUEST);
      }
    } catch (error) {
      throw new HttpException(`${error}`, HttpStatus.BAD_REQUEST);
    }
  }
}
