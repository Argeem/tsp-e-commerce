import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

config();

export const typeOrmModuleOptions: DataSourceOptions = {
  type: 'oracle',
  host: process.env.ORACLE_HOST,
  username: process.env.ORACLE_USERNAME,
  password: process.env.ORACLE_PASSWORD,
  port: parseInt(process.env.ORACLE_PORT),
  sid: process.env.ORACLE_SID,
  entities: [__dirname + '/../**/**/**/*.entity.ts'],
  synchronize: false,
};

export const OrmConfig = {
  ...typeOrmModuleOptions,
  migrationsTableName: 'MIGRATIONS',
  entities: [__dirname + '/../**/**/**/*.entity.ts'],
  migrations: [
    'src/database/migrations/*.ts',
  ],
};

export default new DataSource(OrmConfig);
