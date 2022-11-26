import { HttpException, HttpStatus } from '@nestjs/common';

export const permissionChecker = (role?: number) => {
  if (!role) {
    throw new HttpException('Нет доступа', HttpStatus.FORBIDDEN);
  }
};
