import {
  AllowNull,
  Column,
  HasMany,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';

import { GuestEvent } from './guest_event.model';

@Table({
  tableName: 'guest',
})
export class Guest extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Unique
  @AllowNull(false)
  @Column
  id: string;

  @Unique
  @Column
  email: string;

  @Column
  username: string;

  @HasMany(() => GuestEvent)
  event: GuestEvent;
}
