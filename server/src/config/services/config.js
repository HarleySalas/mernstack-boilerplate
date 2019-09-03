'use strict'

const fs = require('fs');
const path = require('path');

let basePath = path.join(__dirname, '../../../');

const env = process.env.NODE_ENV;

if (env === 'production') {
  basePath = './'
}

const envPath = path.join(basePath, `.env/${env}.config.env`);
const envConfig = require('dotenv').config({
  path: envPath
})

if (envConfig.error) {
  throw envConfig.error
}

//Development Config
const development = {
  env,
  ip: process.env.IP,
  host: process.env.HOST,
  port: process.env.PORT,
  url: `http://${process.env.CLIENT_HOST}:${process.env.CLIENT_PORT}`,
  clientStaticFolder: path.join(basePath, 'client/build/static'),
  clientBuildFolder: path.join(basePath, 'client/build')
}

//Production Config
const production = {
  env,
  ip: process.env.IP,
  host: process.env.HOST,
  port: process.env.PORT,
  url: `https://${process.env.HOST}:${process.env.PORT}`,
  clientStaticFolder: path.join(basePath, 'client/static'),
  clientBuildFolder: path.join(basePath, 'client')
}

const config = {
  development,
  production
}

module.exports = config[env];