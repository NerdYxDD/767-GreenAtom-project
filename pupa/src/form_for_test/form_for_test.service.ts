import { Injectable } from '@nestjs/common';
import { AnswersService } from 'src/answers/answers.service';
import { AnswerCreate } from 'src/dtos/answer.dto';
import { QuestionCreate } from 'src/dtos/question.dto';
import { Questions } from 'src/models/questions.models';
import { QuestionsService } from 'src/questions/questions.service';

@Injectable()
export class FormForTestService {
  constructor(
    private readonly answerService: AnswersService,
    private readonly questionsService: QuestionsService,
  ) {}
  async create(form) {
    const question: QuestionCreate = { text: form.text, quizId: form.quizId };

    await form.answers.map((element: AnswerCreate) => {
      this.answerService.create(element);
    });

    return form;
  }
}
