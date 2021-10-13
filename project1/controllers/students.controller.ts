/**
import {Request, ResponseToolkit, ResponseObject} from '@hapi/hapi'

import {Student} from '../db/connections'

export const createStudent = async (request: Request, h: ResponseToolkit) : Promise<ResponseObject> =>{
    try{
      const student = await Student.create(request.payload);
      return h.response(student);

    } catch (error) {
      return h.response(error).code(500);
    }
  };

  export const getStudents = async (request: Request, h: ResponseToolkit) : Promise<ResponseObject> =>{
    try{
      const students = await  Student.findAll();
      return h.response(students);

    } catch (error) {
      return h.response(error).code(500);
    }
  };

    export const getStudent = async (request: Request, h: ResponseToolkit) : Promise<ResponseObject> =>{
      try{
        const studentFound = await   Student.findByPk(request.params.id);
        if (studentFound){
          return h.response(studentFound);
        }
        return h.response().code(404);

      } catch (error) {
        return h.response(error).code(500);
      }
    };

      export const updateStudent = async (request: Request, h: ResponseToolkit) : Promise<ResponseObject> =>{
        try{
          const updatedStudent = await   Student.update(
            request.params.id,
            request.payload
          );
          if (updatedStudent ){
            return h.response(updatedStudent );
          }
          return h.response().code(404);

        } catch (error) {
          return h.response(error).code(500);
        }
      };

      export const deleteStudent = async (request: Request, h: ResponseToolkit) : Promise<ResponseObject> =>{
        try{
          const deletedStudent = await   Student.destroy(request.params.id);
          if (deletedStudent ){
            return h.response(deletedStudent );
          }
          return h.response().code(404);

        } catch (error) {
          return h.response(error).code(500);
        }
      };
**/
