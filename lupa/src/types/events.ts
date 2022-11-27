import { CustomEvent } from './types';

export interface CreateEventRbo {
  title: string;
}

export type CreateEventDto = CustomEvent[];
export type GetEventByCodeDto = CustomEvent;

export interface getEvents {
  id: string,
  code: string,
  title: string,
  active: boolean,
  ownerId: string,
}
