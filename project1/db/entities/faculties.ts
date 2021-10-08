import { Sequelize, DataTypes, Model, BuildOptions } from 'sequelize';
import uuid = require('uuid');

'use strict'

interface FacultyAttributes {
  id: string;
  name: string;
}

module.exports = (sequelize, DataTypes) =>{
  const faculty = sequelize.define('faculty', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

    faculties.dummyData = [
    {
      name: 'Innovation Technologies'
    }
  ];

  return faculty;

};

module.exports = (sequelize: any, DataTypes: any) => {
  class Faculty extends Model<FacultyAttributes>
  implements FacultyAttributes{
    id!: DataTypes.UUID,
    name!: string

    static associate(models: any) {

    }
  };
  faculty.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }, {
    sequelize,
    tableName: 'Faculties',
    modelName: 'Faculty',
  });
  return faculty;
};
