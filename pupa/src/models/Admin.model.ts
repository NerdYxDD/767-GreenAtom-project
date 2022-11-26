import {
  AllowNull,
  Column,
  ForeignKey,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';

import { Role } from './role.model';

@Table({
  tableName: 'admin',
})
export class Admin extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Unique
  @AllowNull(false)
  @Column
  id: string;

  @Unique
  @AllowNull(false)
  @Column
  email: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @AllowNull(false)
  @Column
  password: string;

  @AllowNull(false)
  @Column
  username: string;

  @ForeignKey(() => Role)
  @AllowNull(false)
  @Column
  role: number;
}
