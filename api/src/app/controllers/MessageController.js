const Message = require('../models/Message')

class MessageController {
  async index (req, res) {
    const msg = await Message.find().populate('author')
    return res.json(msg)
  }

  async show (req, res) {
    const msg = await Message.findById(req.params.id)

    return res.json(msg.author)
  }

  async store (req, res) {
    try {
      let msg = await Message.create({
        ...req.body,
        author: '5cf68955383915287c17b706'
      })

      msg = await msg.populate('author').execPopulate()

      req.io.emit('message', msg)
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
