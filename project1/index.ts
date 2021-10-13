import * as Hapi from '@hapi/hapi';
import { Server, ResponseToolkit, Request} from 'hapi';
import {initDb} from './db'
import 'colors';
import {userController} from './controllers'
import {Connection} from 'typeorm'
import {v4 as uuidv4} from 'uuid';


let userId : string[];
let id;

const init = async () => {
  const server: Server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

server.route({
  method: 'GET',
  path: '/',
  handler: (request: any, h: any) =>{
    id = uuidv4();
    console.log(userId);
    return 'Привет ' + id;
  }
});

  await server.start().then();
  console.log('Started'.green, `Server running on ${server.info.uri}`.green);
};

process.on('unhandleRejection', (err)=> {
  console.error(err);
  process.exit();
});

init();

// to run npm run ts-node-dev index.ts
