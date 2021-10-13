require('dotenv').config();
const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env;


module.exports ={
  "development": {
    "username": process.env.POSTGRES_USER,
    "password": process.env.POSTGRES_PASSWORD,
    "database": "cryptontask2_dev",
    "host": "localhost",
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.POSTGRES_USER,
    "password": process.env.POSTGRES_PASSWORD,
    "database": "cryptontask2_test",
    "host": "localhost",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.POSTGRES_USER,
    "password": process.env.POSTGRES_PASSWORD,
    "database": "cryptontask2_prod",
    "host": "localhost",
    "dialect": "postgres"
  }
}
