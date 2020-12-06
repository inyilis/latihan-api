const express = require('express');

const routes = express.Router();
const product = require('./Routes/products');
const category = require('./Routes/category');
const search = require('./Routes/search');

routes.use('/product', product);
routes.use('/category', category);
routes.use('/search', search);

module.exports = routes;
