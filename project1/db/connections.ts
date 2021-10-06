import 'reflect-metadata'
//import { Connection, createConnection} from 'typeorm';
import {Student} from './entities';
/*export const initDb = async (): Promise<Connection> => {
  const con = await createConnection({
    type : 'sqlite',
    database: './hapi.db',
    entities: [UsersEntity],
  });
  await con.synchronize(true);
  return con;
};*/
import { Sequelize, DataTypes, Model } from 'sequelize';
export const sequelizer = new Sequelize('cryptontask2', 'postgres', 'SecuelaPost', {
  host: 'localhost',
  dialect: 'postgres'
});
try {
  await sequelizer.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

//await Student.sync({ force: true });
//console.log("The table for the Student model was just (re)created!");
module.exports = sequelizer
