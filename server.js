const express = require('express')
const configureMiddleware = require('./config/middleware.js')
const server = express()

configureMiddleware(server)

server.get('/', (req, res) => {
  return res.send({ status: 'live' })
})

module.exports = server
