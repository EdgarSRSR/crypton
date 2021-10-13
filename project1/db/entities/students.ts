//import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import { Sequelize, DataTypes, Model, BuildOptions } from 'sequelize';
import uuid = require('uuid');
const { where } = require('sequelize');
module.exports = (sequelize, DataTypes) =>{
  const Student = sequelize.define("student",{

  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: Sequelize.UUID4
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull : false,
  },
  sex: {
    type: DataTypes.STRING
  },
  phone: {
    type: DataTypes.STRING
  },
  average: {
    type: DataTypes.FLOAT,
  }
  });
};

export const Faculty = sequelize.define("faculty",{
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Student.belongsTo(Faculty, {foreignKey: "facultyId"})

sequelize.sync(/*{force : true}*/);
//console.log(Student === sequelize.models.Student)
