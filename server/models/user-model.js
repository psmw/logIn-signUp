const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  passwordHash: { type: String, required: true },
  firstName: { type: String, required: true },
  surName: { type: String, required: true },
  cpf: { type: Number, required: true },
  pis: { type: Number, required: true },
  country: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  cep: { type: Number, required: true },
  streetName: { type: String, required: true },
  number: { type: Number, required: true },
  complement: { type: String, required: false }
})

const User = mongoose.model('user', userSchema)

module.exports = User
