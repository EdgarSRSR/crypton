import {Request, ResponseToolkit, ResponseObject} from '@hapi/hapi'

import {Student} from '../db/connections'

export const createStudent = async (request: Request, h: ResponseToolkit) : Promise<ResponseObject> =>{
  try{
    const student = new Student(request.payload);
    const studentSaved = await student.save();
    return h.response(studentSaved);

  } catch (error) {
    return h.response(error).code(500);
  }


};
