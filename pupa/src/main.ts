import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: ['content-type', 'authorization'],
    origin: 'http://localhost:3000',
    credentials: true,
  });
  const configService = app.get<ConfigService>(ConfigService);
  await app.listen(configService.get<string>('PORT') ?? 3000);
}
void bootstrap();
