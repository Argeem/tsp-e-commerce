import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class ConfigDBService implements TypeOrmOptionsFactory{
    constructor(private configService: ConfigService) {}

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
          type: 'postgres',
          host: this.configService.get<string>('pg.host'),
          port: this.configService.get<number>('pg.port'),
          username: this.configService.get<string>('pg.user'),
          password: this.configService.get<string>('pg.pass'),
          database: this.configService.get<string>('pg.database'),
    
          entities: [__dirname + '/../**/**/entities/*.entity.ts'],
          autoLoadEntities: true,
          migrations: ['src/migrations/*{.ts,.js}'],
        };
    }
}
