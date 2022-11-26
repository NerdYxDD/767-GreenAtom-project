import { Quiz } from './types';

export interface CreateQuizRbo {
  eventId: string;
  title: string;
}

export type CreateQuizDto = Quiz[];
