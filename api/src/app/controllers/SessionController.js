const User = require('../models/User')

class SessionController {
  async store (req, res) {
    const { username, password } = req.body

    const user = await User.findOne({ username })

    if (!user) {
      return res.status(400).json({ error: { message: 'User not Found' } })
    }

    if (!(await user.compareHash(password))) {
      return res.status(400).json({ error: { message: 'Invalid password' } })
    }

    return res.json({ user, token: User.generateToken(user) })
  }
}

module.exports = new SessionController()
