const express = require('express');

const routes = express.Router();
const controller = require('../Controllers/products');
// const upload = require('../middleware/multer');
// const validate = require('../middleware/validate');
// const cache = require('../middleware/cache');

routes.get('/', controller.get);
routes.post('/', controller.add);
routes.put('/', controller.update);
routes.delete('/:id', controller.del);

module.exports = routes;
