import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import AppDataSource from './database/data-source';

import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });
  await app.listen(5000);

  await AppDataSource.initialize()
    .then(() => {
      console.info('Connected To Database!');
    })
    .catch((err) => {
      console.error("Didn't Connect To Database.", err);
    });

  console.info(`Application Running On: ${await app.getUrl()}`);
}
bootstrap();
