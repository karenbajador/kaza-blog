const mongoose = require('mongoose')
const Schema = mongoose.Schema


const postSchema = new Schema({
  title: String,
  userId: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  text: String,
  tags: Array,
  comments: [{
        text: String,
        created: { type: Date, default: Date.now },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }],
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
})


const Post = mongoose.model('Post', postSchema)

export default Post



