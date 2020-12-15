const express = require('express');

const routes = express.Router();
const product = require('./Routes/products');
const category = require('./Routes/category');
const search = require('./Routes/search');
const history = require('./Routes/history');

routes.use('/product', product);
routes.use('/category', category);
routes.use('/search', search);
routes.use('/history', history);

module.exports = routes;
