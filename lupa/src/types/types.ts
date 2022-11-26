export interface AxiosData<T> {
  data: T;
}

export type EventCode = string;

export interface Event {
  id: string;
  title: string;
  code: EventCode;
  ownerId: string;
  active: boolean;
}

export interface Quiz {
  id: string;
  title: string;
  eventId: string;
}
