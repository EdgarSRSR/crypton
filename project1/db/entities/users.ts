import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {SharedProp} from './sharedProp';
import uuid = require('uuid');

@Entity({name: 'users'})
export class UsersEntity extends SharedProp{

  @PrimaryGeneratedColumn()
  id: string = uuid.v4();

  @Column({ name: 'first_name', nullable: false})
  firstName: string;

}
