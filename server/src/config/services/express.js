'use strict'

const config = require('./config');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

//Express Configuration
const init = () => {
  const app = express();
  app.use(express.json());
  const corsOptions = {
    origin: true,
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': true,
    'Access-Control-Allow-Headers': true,
    'Access-Control-Expose-Headers': true,
    credentials: true
  }
  // app.use('/build/static', express.static(config.clientStaticFolder));
  // app.use('/build', express.static(config.clientBuildFolder));
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  // app.use(bodyParser.json());
  // app.use(express.json());
  // app.use(express.urlencoded({ extended: true, limit: '10kb' }))
  app.use(cors(corsOptions));
  return app;
}

module.exports = {
  init
}