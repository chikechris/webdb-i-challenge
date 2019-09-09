const express = require('express');

const AcctRouter = require('./accounts/account-router')

const server = express();

server.use(express.json());

server.use('/api/account', AcctRouter)

server.use('/', (req, res) => {
  res.send('<h1>Web dataBase Page</h1>')
})

module.exports = server;