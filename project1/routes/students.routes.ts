import {Server} from '@hapi/hapi'
import {createStudent, getStudents, getStudent, deleteStudent, updateStudent} from '../controllers/students.controller'
import {dbConfig} from '../db/connections'
import {Student} from '../db/connections'
export const routes = (server: Server) => {

  server.route({
    method: 'POST',
    path: '/students',
    handler: createStudent
    /**handler: async (request, h) =>{
      let faculty = request.payload
      try {
        const studentCreate = dbConfig.student.create(Student);
        return studentCreate;
      } catch(error){
        console.log(error);
      };
    }**/
  });

  server.route({
    method: 'GET',
    path: '/students',
    handler: getStudents
  });

  server.route({
    method: 'GET',
    path: '/students/{id}',
    handler: getStudent
  });

//- API Getting the minimum and maximum average grade by faculty/gender
  server.route({
    method: 'GET',
    path: '/minmax',
    handler: getStudent


  });

// - API Getting the average score for the faculty
  server.route({
    method: 'GET',
    path: '/gradeavg',
    handler: getStudent

  });


  //- API Getting a list of students by faculty in descending order of average grade
  server.route({
    method: 'GET',
    path: '/facultyStudents',
    handler: getStudent

  });

  server.route({
    method: 'PUT',
    path: '/students/{id}',
    handler: updateStudent
  });

  server.route({
    method: 'DELETE',
    path: '/students/{id}',
    handler: deleteStudent
  });

}
