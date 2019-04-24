const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

// conecta com o banco
var url = '';
mongoose.connect(url,{ useNewUrlParser: true });

//carrega os modulos
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');
//carrega as rotas
const indexRoute =require('./route/index-route');
const productsRoute = require('./route/product-route');
const customerRoute = require('./route/customer-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/',indexRoute);
app.use('/products',productsRoute);
app.use('/customer',customerRoute);

module.exports= app;