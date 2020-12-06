const { Pool } = require('pg');

const db = new Pool({
  database: process.env.DBNAME,
  password: process.env.DBPASSWORD,
  port: process.env.DBPORT,
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  // database : "w4",
  // password : "inyil17",
  // port     : 5432,
  // host     : "localhost",
  // user     : "inyil"
});

module.exports = db;
