const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

var url = '';
//conecta com o banco
mongoose.connect(url,{ useNewUrlParser: true });
const Product = require('./models/product');

const indexRoute =require('./route/index-route');
const productsRoute = require('./route/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));





app.use('/',indexRoute);
app.use('/products',productsRoute);


module.exports= app;