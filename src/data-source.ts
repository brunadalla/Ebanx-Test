import { DataSource } from "typeorm"
import "dotenv/config"

const nodeEnv = process.env.NODE_ENV

export const AppDataSource = new DataSource(
  nodeEnv === "production"
    ? {
        type: "postgres",
        url: process.env.DATABASE_URL,

        entities: ["src/entities/*.{js,ts}"],
        migrations: ["src/migrations/*.{js,ts}"],
      }
    : {
        type: "postgres",
        host: process.env.HOST,
        port: 5432,

        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PWD,
        database: process.env.POSTGRES_DB,

        logging: true,
        synchronize: false,

        entities: ["src/entities/*.{js,ts}"],
        migrations: ["src/migrations/*.{js,ts}"],
      }
)
