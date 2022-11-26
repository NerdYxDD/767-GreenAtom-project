class EventDto {
  readonly id: string;
  readonly code: string;
  readonly title: string;
  readonly active: boolean;
  readonly ownerId: string;
}

export type FullEvent = EventDto;
export type CreateEvent = Pick<EventDto, 'title' | 'ownerId'>;
