import {
  AllowNull,
  Column,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';

@Table({
  tableName: 'quizResult',
})
export class QuizResult extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Unique
  @AllowNull(false)
  @Column
  id: string;

  @Column
  quizId: string;

  @Column
  userId: string;

  @Column
  pointsScored: number;

  @Column
  pointsPossible: number;
}
