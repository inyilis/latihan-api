require('dotenv/config');
const express = require('express');

const server = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./src/main');
const db = require('./src/Configs/db');

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(morgan('dev'));
server.use(cors());
server.use(routes);

db.connect()
  .then(() => {
    console.log('Database Connected');
  })
  .catch(() => {
    console.log('Database not Connected');
  });

server.listen(4000, () => {
  console.log('Server running on port 4000');
});
