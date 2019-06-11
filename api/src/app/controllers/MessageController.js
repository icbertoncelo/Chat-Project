const Message = require('../models/Message')

class MessageController {
  async index (req, res) {
    const msg = await Message.find()
    return res.json(msg)
  }

  async show (req, res) {
    const msg = await Message.findById(req.params.id)

    return res.json(msg.author)
  }

  async store (req, res) {
    try {
      const msg = await Message.create({
        ...req.body,
        author: '5cf5ba08770bc041b0ea3bc2'
      })

      return res.json(msg)
    } catch (err) {
      res.send(err)
    }
  }

  async destroy (req, res) {
    await Message.findByIdAndDelete(req.params.id)

    return res.send()
  }
}

module.exports = new MessageController()
