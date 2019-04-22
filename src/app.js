const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

// conecta com o banco

var url = 'mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb';
mongoose.connect(url);

//carrega os modulos
const Product = require('./models/product');
const Custumer = require('./models/custumer');
const Order = require('./models/order');
//carrega as rotas
const indexRoute =require('./route/index-route');
const productsRoute = require('./route/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));





app.use('/',indexRoute);
app.use('/products',productsRoute);


module.exports= app;