/* eslint-disable no-unused-vars */
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const server = express()
const Auth = require('./Auth/auth-router')
const Listing = require('./Listings/listing-router')

server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/auth', Auth)
server.use('/api/Listing', Listing)  

server.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = server;