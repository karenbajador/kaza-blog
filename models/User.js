const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  username: String,
  password: String,
  role: String,  
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
  createdBy: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  updatedBy: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  active: Boolean
})


const User = mongoose.model('User', userSchema)

export default User



