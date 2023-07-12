import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConsoleLogger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService)
  await app.listen(configService.get<number>('port'));

  const logger = new ConsoleLogger();
  logger.log('Nest application running on PORT : ' + configService.get<number>('port'), "NestApplication")

}
bootstrap();
