"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
require("dotenv/config");
const nodeEnv = process.env.NODE_ENV;
exports.AppDataSource = new typeorm_1.DataSource(nodeEnv === "production"
    ? {
        type: "postgres",
        url: process.env.DATABASE_URL,
        entities: ["src/entities/*.ts"],
        migrations: ["src/migrations/*.ts"],
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
        entities: ["src/entities/*.ts"],
        migrations: ["src/migrations/*.ts"],
    });
