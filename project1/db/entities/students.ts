//import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import { Sequelize, DataTypes, Model, BuildOptions } from 'sequelize';
import uuid = require('uuid');

export interface StudentAttributes {
  firstName: string;
  lastName: string;
  sex: string;
  phone: string;
  faculty: string;
  average: Number;
  id: string;

}

export interface StudentModel extends Model<StudentAttributes>, StudentAttributes {}

export class Student extends Model<StudentModel, StudentAttributes> {}
export type StudentStatic = typeof Model & {
   new (values?: object, options?: BuildOptions): StudentModel;
};

export function StudentFactory (sequelize: Sequelize) : StudentStatic{

  return <StudentStatic>sequelize.define("students", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sex: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    faculty: {
      type: DataTypes.STRING,
      allowNull: false
    },
    average: {
      type: DataTypes.FLOAT,
    }
  });
}

//console.log(Student === sequelize.models.Student)
