const express = require('express');

const routes = express.Router();
const controller = require('../Controllers/history');
// const validate = require('../middleware/validate');

routes.get('/', controller.get);
routes.post('/', controller.add);
routes.delete('/:id', controller.del);

module.exports = routes;
