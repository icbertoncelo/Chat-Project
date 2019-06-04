const express = require('express')
const validate = require('express-validation')
const handle = require('express-async-handler')

const routes = express.Router()

const authMiddleware = require('./app/middlewares/auth')

const controllers = require('./app/controllers')
const validators = require('./app/validators')

/* User */
routes.post('/users', validate(validators.User), handle(controllers.UserController.store))

/* Session */
routes.post(
  '/sessions',
  validate(validators.Session),
  handle(controllers.SessionController.store)
)

routes.use(authMiddleware)

/* Message */
routes.get('/messages', handle(controllers.MessageController.index))
routes.get('/messages/:id', handle(controllers.MessageController.show))
routes.post(
  '/messages',
  validate(validators.Message),
  handle(controllers.MessageController.store)
)
routes.delete('/messages/:id', handle(controllers.MessageController.destroy))

module.exports = routes
