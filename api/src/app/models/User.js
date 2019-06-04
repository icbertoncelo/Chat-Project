const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth')

const User = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
    required: true,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

User.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next()
  }

  this.password = await bcrypt.hash(this.password, 8)
})

User.methods = {
  compareHash (password) {
    return bcrypt.compare(password, this.password)
  }
}

User.statics = {
  generateToken ({ id }) {
    return jwt.sign({ id }, authConfig.secret, { expiresIn: authConfig.ttl })
  }
}

module.exports = mongoose.model('User', User)
