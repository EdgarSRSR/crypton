/**
import 'reflect-metadata'
//import { Connection, createConnection} from 'typeorm';

import * as sequelize from 'sequelize';
import {StudentFactory} from './entities/students';


export const dbConfig = new sequelize.Sequelize(
    (process.env.DB_NAME = "cryptontask2"),
    (process.env.DB_USER = "postgress"),
    (process.env.DB_PASSWORD = "SecuelaPost"),
    {
        port: Number(process.env.DB_PORT) || 5432,
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



const sequelize = new
Sequelize(config.dbLink,{

  models:[

  ],
  pool: {
    max: 60,
    min: 0,
    idle: 30000,
    acquire: 100000,
  },
  logging: false
});

sequelize.sync();
models/index.ts
server/index.ts - server.app.db = sequelize;
web3.eth.subscribe('newBlockHeaders')
//await Student.sync({ force: true });
console.log("The table for the Student model was just (re)created!");

export const Student = StudentFactory(dbConfig)
module.exports = dbConfig
*//
