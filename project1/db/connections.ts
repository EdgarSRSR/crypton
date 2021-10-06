import 'reflect-metadata'
import { Connection, createConnection} from 'typeorm';
import {UsersEntity} from './entities';
export const initDb = async (): Promise<Connection> => {
  const con = await createConnection({
    type : 'sqlite',
    database: './hapi.db',
    entities: [UsersEntity],
  });
  await con.synchronize(true);
  return con;
};
