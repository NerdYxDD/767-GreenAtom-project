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
import { RoomEvent } from './event.model';

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
  @BelongsTo(() => RoomEvent)
  event: RoomEvent;

  @ForeignKey(() => Guest)
  guestId: Guest;
  @ForeignKey(() => RoomEvent)
  eventId: RoomEvent;
}
