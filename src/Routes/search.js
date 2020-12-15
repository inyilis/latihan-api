const express = require('express');

const routes = express.Router();
const controller = require('../Controllers/search');

routes.get('/', controller.get);
routes.get('/:nama', controller.getName);

module.exports = routes;
