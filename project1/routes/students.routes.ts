import {Server} from '@hapi/hapi'
import {createStudent} from '../controllers/students.controller'

export const routes = (server: Server) => {

  server.route({
    method: 'POST',
    path: '/students',
    handler: createStudent
  })

  server.route({
    method: 'GET',
    path: '/students',
    handler: () => {}
  })

  server.route({
    method: 'GET',
    path: '/students/{id}',
    handler: () => {}
  })

  server.route({
    method: 'PUT',
    path: '/students/{id}',
    handler: () => {}
  })

  server.route({
    method: 'DELETE',
    path: '/students/{id}',
    handler: () => {}
  })

}
