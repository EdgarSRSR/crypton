import { Student } from '../../db/entities';
import { ResponseToolkit, ServerRoute, Request } from 'hapi';
import { Sequelize, DataTypes, Model } from 'sequelize';

export const studentController = Array<ServerRoute> => {
  const studentRepo: Repository<U> = con.getRepository(Student);
  return [
    {
      method: 'GET',
      path: '/student',
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
