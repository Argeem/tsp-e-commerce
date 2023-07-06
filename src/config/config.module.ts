import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmModuleOptions } from './typeorm.config';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRoot({
      ...typeOrmModuleOptions,
      autoLoadEntities: true,
    }),
  ],
})
export class DatabaseModule {}