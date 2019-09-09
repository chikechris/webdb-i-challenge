const express = require('express')

const db = require('./data/dbConfig.js')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
  res.status(200).send('App is Up!!!')
})

server.get('/accounts', (req, res) => {
  db('accounts')
    .then(results => {
      res.status(200).json(results)
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

server.get('/accounts/:id', (req, res) => {
  db('accounts')
    .where({ id: req.params.id })
    .first()
    .then(results => {
      res.status(200).json(results)
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

module.exports = server
