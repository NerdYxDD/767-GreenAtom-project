import { IsNotEmpty, IsUUID } from 'class-validator';

class Quiz {
  @IsNotEmpty()
  @IsUUID(4)
  readonly id: string;

  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  @IsUUID(4)
  readonly eventId: string;
}

export type FullQuiz = Quiz;
export type QuizWtId = Omit<Quiz, 'id'>;
export type PassedQuiz = Pick<Quiz, 'id'>;
