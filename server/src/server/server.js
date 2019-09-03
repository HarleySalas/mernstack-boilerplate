'use strict'

const {
  config,
  express
} = require('../config');
const routes = require('../../routes');

let server = null;

const listen = () => {
  const app = express.init();
  routes.init(app)
  server = app.listen(config.port, config.ip);
  console.log(`Listening at http://${config.host}:${config.port}`);
}

const close = () => {
  server.close();
  console.log('Server Closed.');
}

module.exports = {
  listen,
  close
}