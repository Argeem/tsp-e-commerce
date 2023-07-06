import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configService } from './config/config.service';
import { ConsoleLogger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(configService.getPort());

  const logger = new ConsoleLogger();
  logger.log('Nest application running on PORT : ' + configService.getPort(), "NestApplication")

}
bootstrap();
