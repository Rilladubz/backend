const express = require('express')
const configureMiddleware = require('./config/middleware.js')
const server = express()

const users = require('./routes/users.js')

configureMiddleware(server)

server.get('/', (req, res) => {
  return res.send({ status: 'live' })
})

server.use('/api/users', users)

module.exports = server
