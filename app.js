var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var app = express();
var proxyKey = require('./proxy_key.js');
var cors = require('cors');

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(function(req, res, next) {
  if(req.query.proxy_key != proxyKey){
    console.log('bad');
    res.status(403).end();
  }
  next();
});

app.use('*', routes);


module.exports = app;
