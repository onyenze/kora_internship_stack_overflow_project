// In index.ts
import * as fs from 'fs';
import * as path from 'path';
import { Sequelize, DataTypes } from 'sequelize';
import Task from './task';
import dotenv from "dotenv";
dotenv.config();

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../config/database')[env];

const db: any = {};

let sequelize: Sequelize;

if (config.use_env_variable) {
  const databaseUrl = process.env[config.use_env_variable];
  if (!databaseUrl) {
    throw new Error(`Environment variable ${config.use_env_variable} is not set.`);
  }
  sequelize = new Sequelize(databaseUrl, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs.readdirSync(__dirname)
  .filter((file: string) => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.ts' &&
      file.indexOf('.test.ts') === -1
    );
  })
  .forEach((file: string) => {
    const model = require(path.join(__dirname, file)).default;
    if (model.associate) {
      model.associate(db);
    }
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName: string) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
