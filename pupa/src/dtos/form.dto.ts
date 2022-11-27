import { AnswerCreate } from './answer.dto';

export class FormDto {
  readonly text: string;
  readonly quizId: string;
  readonly answers: AnswerCreate[];
}
