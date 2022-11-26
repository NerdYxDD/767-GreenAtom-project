import {
  AllowNull,
  BelongsTo,
  Column,
  ForeignKey,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';

import { Guest } from './guest.model';
import { Event } from './event.model';

@Table({
  tableName: 'guest_event',
})
export class GuestEvent extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Unique
  @AllowNull(false)
  @Column
  id: string;

  @BelongsTo(() => Guest)
  guest: Guest;
  @BelongsTo(() => Event)
  event: Event;

  @ForeignKey(() => Guest)
  guestId: Guest;
  @ForeignKey(() => Event)
  eventId: Event;
}
