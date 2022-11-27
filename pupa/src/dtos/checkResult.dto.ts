import { IsArray, IsNotEmpty, IsUUID } from 'class-validator';
import { AnswerCreate } from './answer.dto';

export class ResultDto {

  @IsNotEmpty()
  @IsUUID(4)
  readonly quizId: string;

  @IsArray()
  readonly answers: AnswerCreate[];
}


