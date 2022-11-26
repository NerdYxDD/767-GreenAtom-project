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
import { Quiz } from './quiz.model';

@Table({
  tableName: 'guest_event',
})
export class GuestQuiz extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Unique
  @AllowNull(false)
  @Column
  id: string;

  @BelongsTo(() => Guest)
  guest: Guest;
  @BelongsTo(() => Quiz)
  quiz: Quiz;

  @ForeignKey(() => Guest)
  guestId: Guest;
  @ForeignKey(() => Quiz)
  quizId: Quiz;
}
