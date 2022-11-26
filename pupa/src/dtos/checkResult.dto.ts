export class ResultDto {
  readonly userId: string;
  readonly quizeId: string;
  readonly answers: Answer[];
}

class Answer {
  IsRight: boolean;
  text: string;
  questionId: string;
}
