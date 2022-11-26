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

import { Questions } from './questions.models';

@Table({
  tableName: 'answers',
})
export class Answers extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Unique
  @AllowNull(false)
  @Column
  id: string;

  @AllowNull(false)
  @Column
  IsRight: boolean;

  @AllowNull(false)
  @Column
  text: string;

  @BelongsTo(() => Questions)
  quiz: Questions;

  @ForeignKey(() => Questions)
  @AllowNull(false)
  @Column
  questionId: string;
}
