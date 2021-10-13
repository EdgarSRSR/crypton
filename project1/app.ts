/**
import {Server} from '@hapi/hapi'
import {routes} from './routes/students.routes'
import {filepaths} from 'filepaths'
import { dbConfig } from "./db/connections";
import 'colors';
export const init = async () => {

  const server: Server = new Server({
    port: 3000,
    host: 'localhost'
  });

  routes(server);

  await server.start();
  try{
    console.log('Started'.green, `Server running on ${server.info.uri}`.green);
    //console.log('server running on %s', server.info.uri);
  } catch(err){
    console.log(JSON.stringify(err));
  }

  dbConfig
    .sync().then(() => console.log("connected to db"))
    .catch(() => {
        throw "error";
     });



}


**/


import * as Hapi from '@hapi/hapi';
import { Server, ResponseToolkit, Request} from 'hapi';
import 'colors';

//import {studentController} from './controllers'


export const init = async () => {
  const server: Server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });


server.route({
  method: 'GET',
  path: '/',
  handler: (request: Request, h: ResponseToolkit, err?: Error) =>{
    return {msg: 'Hello World'};
  },
});

  //const seq = await sequelize();
  //console.log('DB init -> Done');
  //server.route(userController(seq));
  await server.start().then();
  console.log('Started'.green, `Server running on ${server.info.uri}`.green);


};

process.on('unhandleRejection', (err)=> {
  console.error(err);
  process.exit();
});
