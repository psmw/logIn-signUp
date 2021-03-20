const mongoose = require('mongoose')

const editUserSchema = new mongoose.Schema({
  firstName: { type: String, required: true }
})

const EditUser = mongoose.model('user', editUserSchema)

module.exports = EditUser
