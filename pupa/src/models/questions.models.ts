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

import { Quiz } from './quiz.model';
import { Answers } from './answers.model';

@Table({
  tableName: 'questions',
})
export class Questions extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Unique
  @AllowNull(false)
  @Column
  id: string;

  @Unique
  @Column
  text: string;

  @HasMany(() => Answers)
  answers: Answers;

  @BelongsTo(() => Quiz)
  quiz: Quiz;

  @ForeignKey(() => Quiz)
  @AllowNull(false)
  @Column
  quizId: string;
}
