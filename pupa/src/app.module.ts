import { Module } from '@nestjs/common';
import dattebyo from '../dattebyo/dattebyo';

@Module({
  imports: [dattebyo],
  controllers: [],
  providers: [],
})
export class AppModule {}
