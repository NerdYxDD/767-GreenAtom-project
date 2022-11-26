import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { v4 as uuidv4 } from 'uuid';

import { Admin } from '../models/Admin.model';
import { Role } from '../models/role.model';

import { hashPassword } from './admin.utils';

import { FullAdmin, FullRole, NewAdmin } from '../dtos/admin.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin)
    private readonly admin: typeof Admin,
    @InjectModel(Role)
    private readonly role: typeof Role,
  ) {}

  create(admin: NewAdmin): Promise<FullAdmin> {
    const { password, ...rest } = admin;
    return this.admin.create({
      id: uuidv4(),
      password: hashPassword(password),
      role: 1,
      ...rest,
    });
  }

  async findOneAdmin(email: string): Promise<FullAdmin> {
    return await this.admin.findOne({ where: { email } });
  }

  async findRole(roleId: number): Promise<FullRole> {
    return await this.role.findOne({ where: { id: roleId } });
  }
}
