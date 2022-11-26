import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AuthModule } from '../auth/auth.module';

import { Admin } from '../models/Admin.model';
import { Role } from '../models/role.model';

@Module({
  imports: [SequelizeModule.forFeature([Admin, Role]), AuthModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
