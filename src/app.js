const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

// var url = 'mongodb+srv://test:test@cluster0-hlvl4.azure.mongodb.net/test?retryWrites=true';
// // conecta com o banco
// mongoose.connect(url,{ useNewUrlParser: true });
var url = 'mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb';
mongoose.connect(url);

const Product = require('./models/product');

const indexRoute =require('./route/index-route');
const productsRoute = require('./route/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));





app.use('/',indexRoute);
app.use('/products',productsRoute);


module.exports= app;