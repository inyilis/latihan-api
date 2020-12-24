const express = require('express');

const routes = express.Router();
const controller = require('../Controllers/category');
// const validate = require('../middleware/validate');

routes.get('/', controller.get);
routes.post('/', controller.add);
routes.put('/', controller.update);
routes.delete('/:id', controller.del);

module.exports = routes;
