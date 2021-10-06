//import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import { Sequelize, DataTypes, Model } from 'sequelize';
import {SharedProp} from './sharedProp';
import uuid = require('uuid');

export class Student extends SharedProp, Model{}

Student.init({

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
    type: DataTypes.INTEGER
  },
  faculty: {
    type: DataTypes.STRING,
    allowNull: false
  },
  average: {
    type: DataTypes.FLOAT,
  },
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV1,
    primaryKey: true
  }
},  {
  sequelize,
  modelName: 'Student'
});

console.log(Student === sequelize.models.Student)
