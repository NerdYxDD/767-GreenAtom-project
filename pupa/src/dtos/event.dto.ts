import { IsBoolean, IsNotEmpty, IsUUID } from 'class-validator';

class EventDto {
  @IsNotEmpty()
  @IsUUID(4)
  readonly id: string;

  @IsNotEmpty()
  readonly code: string;

  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  @IsBoolean()
  readonly active: boolean;

  @IsNotEmpty()
  @IsUUID(4)
  readonly ownerId: string;
}

export type FullEvent = EventDto;
export type CreateEvent = Pick<EventDto, 'title' | 'ownerId'>;
