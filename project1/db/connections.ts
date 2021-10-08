import 'reflect-metadata'
//import { Connection, createConnection} from 'typeorm';

import * as sequelize from 'sequelize';
import {StudentFactory} from './entities/students';

/**
export const dbConfig = new Sequelize('cryptontask2', 'postgres', 'SecuelaPost', {
  host: 'localhost',
  dialect: 'postgres'
});
try {
  await dbConfig.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
**/
export const dbConfig = new sequelize.Sequelize(
    (process.env.DB_NAME = "cryptontask2"),
    (process.env.DB_USER = "postgress"),
    (process.env.DB_PASSWORD = "SecuelaPost"),
    {
        port: Number(process.env.DB_PORT) || 54320,
        host: process.env.DB_HOST || "localhost",
        dialect: "postgres",
        pool: {
            min: 0,
            max: 5,
            acquire: 30000,
            idle: 10000,
        },
    }
);

//await Student.sync({ force: true });
console.log("The table for the Student model was just (re)created!");

export const Student = StudentFactory(dbConfig)
module.exports = dbConfig
