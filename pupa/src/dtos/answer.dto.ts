import { IsBoolean, IsNotEmpty, IsUUID } from 'class-validator';

export class AnswerCreate {
  @IsNotEmpty()
  @IsUUID(4)
  readonly questionId: string;

  @IsNotEmpty()
  readonly text: string;

  @IsNotEmpty()
  @IsBoolean()
  readonly IsRight: boolean;
}
