import { IsNotEmpty, IsUUID } from 'class-validator';

export class QuestionCreate {
  @IsNotEmpty()
  @IsUUID(4)
  readonly quizId: string;

  @IsNotEmpty()
  readonly text: string;
}
