const express = require('express');
const productController = require('./controllers/product.controller');

const app = express();
app.use(express.json());

app.use('/api/products',productController);

module.exports = app;