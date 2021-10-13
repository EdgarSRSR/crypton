/**
import {UpdateDateColumn, CreateDateColumn} from 'typeorm';
import { Sequelize, DataTypes, Model } from 'sequelize';

export class SharedProp{
  @CreateDateColumn({
    default: () => 'CURRENT_TIMESTAMP',
    type: 'datetime',
    name: 'created_at'
  })
  createdAt: Date;

  @UpdateDateColumn({
    default: () => 'CURRENT_TIMESTAMP',
    type: 'datetime',
    name: 'updated_at'
  })
  updatedAt: Date;
}
**/
