import { Sequelize, DataTypes, Model, BuildOptions } from 'sequelize';
import uuid = require('uuid');

'use strict'

module.exports = (sequelize, DataTypes) =>{
  const faculties = sequelize.define('faculties', {
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

  return faculties;

};
