import { TypeOrmModuleOptions } from "@nestjs/typeorm";

require('dotenv').config();

class ConfigService {
    constructor(private env: { [k: string]: string | undefined }) {}

    private getValue(key: string, throwOnMissing = true): string {
      const value = this.env[key];
      if (!value && throwOnMissing) {
        throw new Error(`config error - missing env.${key}`);
      }
      return value;
    }

    public getPort() {
        return this.getValue('PORT', true);
    }

    public getTypeOrmConfig(): TypeOrmModuleOptions {
        return {
          type: 'postgres',
          host: this.getValue('DATABASE_HOST'),
          port: parseInt(this.getValue('DATABASE_PORT')),
          username: this.getValue('DATABASE_USERNAME'),
          password: this.getValue('DATABASE_PASSWORD'),
          database: this.getValue('DATABASE_SID'),
          entities: [__dirname + '/../**/**/**/*.entity.ts'],
          synchronize: false,
        };
    }

    public ensureValues(keys: string[]) {
        keys.forEach((k) => this.getValue(k, true));
        return this;
    }

    public isProduction() {
      const mode = this.getValue('MODE', false);
      return mode != 'DEV';
    }

}

const configService = new ConfigService(process.env).ensureValues([
    'DATABASE_HOST',
    'DATABASE_PORT',
    'DATABASE_USERNAME',
    'DATABASE_PASSWORD',
    'DATABASE_SID',
]);
export { configService };