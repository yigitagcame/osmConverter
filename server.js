const express = require('express');
const route = require('./routes');

const Server = express();

// Routing
Server.use('/', route);

module.exports = Server;
