class Quiz {
  readonly id: string;
  readonly title: string;
  readonly eventId: string;
}

export type FullQuiz = Quiz;
export type QuizWtId = Omit<Quiz, 'id'>;
