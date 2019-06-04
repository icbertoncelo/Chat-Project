const Message = require('../models/Message')

class MessageController {
  async index (req, res) {
    const msg = await Message.find()

    return res.json(msg)
  }

  async show (req, res) {
    const msg = await Message.findById(req.params.id)

    return res.json(msg)
  }

  async store (req, res) {
    const msg = await Message.create({ ...req.body, author: req.userId })

    return res.json(msg)
  }

  async destroy (req, res) {
    await Message.findByIdAndDelete(req.params.id)

    return res.send()
  }
}

module.exports = new MessageController()
