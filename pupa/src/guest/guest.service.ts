import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Guest } from '../models/guest.model';
import { FullGuest, NewGuest } from '../dtos/guest.dto';

@Injectable()
export class GuestService {
  constructor(
    @InjectModel(Guest)
    private readonly guest: typeof Guest,
  ) {}

  async newGuest({ email, username }: NewGuest): Promise<FullGuest> {
    return await this.guest.create({ email, username });
  }
}
