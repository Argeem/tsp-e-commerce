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

    public getJWTSecret() {
        return this.getValue('JWT_SECRET', true);
    }

    public getTypeOrmConfig(): TypeOrmModuleOptions {
        return {
          type: 'postgres',
          host: this.getValue('PG_HOST'),
          port: parseInt(this.getValue('PG_PORT')),
          username: this.getValue('PG_USER'),
          password: this.getValue('PG_PASSWORD'),
          database: this.getValue('PG_DATABASE'),
    
          entities: [__dirname + '/../**/**/entities/*.entity.ts'],
          autoLoadEntities: true,
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
    'PG_HOST',
    'PG_PORT',
    'PG_USER',
    'PG_PASSWORD',
    'PG_DATABASE',
]);  
export { configService };
