import "reflect-metadata";
import "dotenv/config";
import path from "path";
import { DataSource, DataSourceOptions } from "typeorm";

const setDataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "./entities/**.{js,ts}");
  const migrationsPath: string = path.join(
    __dirname,
    "./migrations/**.{js,ts}"
  );

  const nodeEnv = process.env.NODE_ENV;

  if(nodeEnv === "production"){
    return {
      entities: [entitiesPath],
      migrations: [migrationsPath],
      type: "postgres",
      url: process.env.DATABASE_URL,
    }
  }

  return {
    database: process.env.POSTGRES_DB,
    entities: [entitiesPath],
    host: process.env.HOST,
    logging: true,
    migrations: [migrationsPath],
    password: process.env.POSTGRES_PWD,
    port: 5432,
    synchronize: false,
    type: "postgres",
    username: process.env.POSTGRES_USER,
  };
};

const dataSourceConfig = setDataSourceConfig();
export default new DataSource(dataSourceConfig);