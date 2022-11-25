import {
  AllowNull,
  Column,
  Default,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';

@Table({
  tableName: 'guest',
})
export class Guest extends Model {
  @IsUUID(4)
  @Default(uuidv4())
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
}
