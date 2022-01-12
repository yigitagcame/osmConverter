const express = require('express');
const route = require('./routes');

const Server = express();

// Logging
if (process.env.NODE_ENV !== 'production') {
  const morgan = require('morgan');
  Server.use(morgan('dev'));
};

// Routing
Server.use('/', route);

module.exports = Server;
