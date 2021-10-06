import * as Hapi from '@hapi/hapi';
import { Server, ResponseToolkit, Request} from 'hapi';
import {initDb} from './db'
import 'colors';
import {userController} from './controllers'
import {Connection} from 'typeorm'

const init = async () => {
  const server: Server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

server.route({
  method: 'GET',
  path: '/',
  handler: (request: Request, h: ResponseToolkit, err?: Error) =>{
    return {msg: 'Hello World'};
  }
});

  const con: Connection = await initDb();
  console.log('DB init -> Done');
  server.route(userController(con));
  await server.start().then();
  console.log('Started'.green, `Server running on ${server.info.uri}`.green);
};

process.on('unhandleRejection', (err)=> {
  console.error(err);
  process.exit();
});

init();

// to run npm run ts-node-dev index.ts
