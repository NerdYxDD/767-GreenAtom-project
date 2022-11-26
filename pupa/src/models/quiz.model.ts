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

import { RoomEvent } from './event.model';
import { Questions } from './questions.models';

@Table({
  tableName: 'quiz',
})
export class Quiz extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Unique
  @AllowNull(false)
  @Column
  id: string;

  @Column
  title: string;

  @BelongsTo(() => RoomEvent)
  event: RoomEvent;

  @HasMany(() => Questions)
  question: Questions;

  @ForeignKey(() => RoomEvent)
  @AllowNull(false)
  @Column
  eventId: string;
}
