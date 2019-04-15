'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//carrega as rotas
const index = require('./routes/indexs');
const product = require('./routes/product');

//converte tudo que chega na api para JSON
app.use(bodyParser.json());
// condifica a url 
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/products', product);

module.exports = app;