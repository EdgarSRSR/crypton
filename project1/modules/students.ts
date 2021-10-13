/**
import { Sequelize, DataTypes, Model, BuildOptions } from 'sequelize';
import uuid = require('uuid');

'use strict'

module.exports = (sequelize, DataTypes) =>{
  const students = sequelize.define('students', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
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
      type: DataTypes.STRING(11),
    is: /^[0-9]+{11}$/i
    },
    faculty: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gradeAvg: {
      type: DataTypes.FLOAT,
    }
  });

    students.dummyData = [
    {
      firstName: 'Boris',
      lastName: 'Chernyi',
      sex : 'male',
      phone : '8997778',
      faculty : 'fit',
      gradeAvg : 7.0
    }
  ];

  return students;

};
**/
