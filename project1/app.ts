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
