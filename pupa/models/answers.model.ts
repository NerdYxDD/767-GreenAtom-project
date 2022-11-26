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
  questionId: string;

  @AllowNull(false)
  @Column
  IsRight: boolean;

  @AllowNull(false)
  @Column
  text: string;
}
