/**
import { Connection, Repository } from 'typeorm';
import { UsersEntity } from '../../db/entities';
import { ResponseToolkit, ServerRoute, Request } from 'hapi';

export const userController = (con: Connection): Array<ServerRoute> => {
  const userRepo: Repository<UsersEntity> = con.getRepository(UsersEntity);
  return [
    {
      method: 'GET',
      path: '/users',
      handler: ( request: Request, h: ResponseToolkit, err?: Error) => {
        return userRepo.find();
      },
    },
    {
      method: 'GET',
      path: '/users/{id}',
      handler: ({params:{id}}: Request, h: ResponseToolkit, err?: Error) =>
        userRepo.findOne(id),
    },
    {
      method: 'POST',
      path: '/users',
      handler: ( {payload}: Request, h: ResponseToolkit, err?: Error) => {
        const {firstName} = payload as Partial <
          UsersEntity
        >;
        const u: Partial<UsersEntity> = new UsersEntity[
          firstName
        ];
        return {msg: 'Hello' + u.id};
      },
    },
  ];
};
**/
