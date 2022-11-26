import {
  AllowNull,
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';

import { Admin } from './Admin.model';
import { GuestEvent } from './guest_event.model';

@Table({
  tableName: 'room_event',
})
export class RoomEvent extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Unique
  @AllowNull(false)
  @Column
  id: string;

  @Unique
  @Column
  code: string;

  @Column
  title: string;

  @BelongsTo(() => Admin)
  owner: Admin;

  @HasMany(() => GuestEvent)
  guests: GuestEvent;

  @ForeignKey(() => Admin)
  @Column
  ownerId: string;
}
