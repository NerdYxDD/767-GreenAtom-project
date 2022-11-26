import {
  AllowNull,
  AutoIncrement,
  Column,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { Admin } from './Admin.model';

@Table({
  tableName: 'role',
  createdAt: false,
  updatedAt: false,
})
export class Role extends Model {
  @PrimaryKey
  @AutoIncrement
  @Unique
  @AllowNull(false)
  @Column
  id: number;

  @Column
  name: string;

  @HasMany(() => Admin)
  admin: Admin;
}
