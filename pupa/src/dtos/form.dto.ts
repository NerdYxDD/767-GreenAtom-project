import { IsNotEmpty, IsUUID } from 'class-validator';
import { AnswerCreate } from './answer.dto';

export class FormDto {
  @IsNotEmpty()
  readonly text: string;

  @IsNotEmpty()
  @IsUUID(4)
  readonly quizId: string;

  @IsNotEmpty()
  readonly answers: AnswerCreate[];
}
