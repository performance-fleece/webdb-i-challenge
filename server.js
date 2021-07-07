const express = require('express');

// const db = require('./data/dbConfig.js');

const accountsRouter = require('./accounts/accountsRouter');

const server = express();
server.use(logger);
server.use(express.json());

server.use('/api/accounts', accountsRouter);

function logger(req, res, next) {
  const time = new Date();
  console.log(`${req.method} to ${req.path} at ${time.toISOString()}`);
  next();
}

module.exports = server;
