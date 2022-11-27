import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { JWTPayload } from 'src/auth/auth.types';
import { permissionChecker } from 'src/auth/auth.utils';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FormDto } from 'src/dtos/form.dto';
import { FormForTestService } from './form_for_test.service';

@Controller('form-for-test')
export class FormForTestController {
  constructor(private readonly formService: FormForTestService) {}
  @UseGuards(JwtAuthGuard)
  @Post('create')
  async createTestSection(
    @Body() form: FormDto,
    @Request() { user }: { user: JWTPayload },
  ) {
    permissionChecker(user?.roleId);
    return await this.formService.create(form);
  }
}
