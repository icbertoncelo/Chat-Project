const Joi = require('joi')

module.exports = {
  body: {
    text: Joi.string().required()
  }
}
