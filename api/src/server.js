require('dotenv').config()

const express = require('express')
const validate = require('express-validation')
const Youch = require('youch')
const mongoose = require('mongoose')
const databaseConfig = require('./config/database')
const cors = require('cors')

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'

    this.server = require('http').Server(this.express)
    this.io = require('socket.io')(this.server)

    this.database()
    this.middlewares()
    this.routes()
    this.exception()
  }

  database () {
    mongoose.connect(databaseConfig.uri, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false
    })
  }

  middlewares () {
    this.express.use(cors())
    this.express.use(express.json())

    this.express.use((req, res, next) => {
      req.io = this.io

      next()
    })
  }

  routes () {
    this.express.use(require('./routes'))
  }

  exception () {
    this.express.use(async (err, req, res, next) => {
      if (err instanceof validate.ValidationError) {
        return res.status(err.status).json(err)
      }

      if (process.env.NODE_ENV !== 'production') {
        const youch = new Youch(err, req)

        return res.json(await youch.toJSON)
      }

      return res
        .status(err.status || 500)
        .json({ error: { message: 'Internal server error' } })
    })
  }
}

module.exports = new App().server
