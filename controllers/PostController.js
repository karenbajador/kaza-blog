import express from 'express'
import { Post } from '../models'


const posts = express.Router()

posts.get('/', function(req, res) {
    Post.find({}, function(err, posts) {
      if (err) throw err
      res.send(posts)
    })
})

// posts.get('/:id', function(req, res) {
//     Post.findById(req.params['id'], function(err, posts) {
//       if (err) throw err
//       res.send(posts)
//     })
// })


posts.get('/:title', function(req, res) {
  Post.findOne({title: req.params['title']}, function(err, posts) {
    if (err) throw err
    res.send(posts)
  })
})

posts.get('/tags/:tag', function(req, res) {
    Post.find({tags: {"$in" : [req.params['tag']]}}, function(err, posts) {
      if (err) throw err
      console.log(posts)
      res.send(posts)
    })
})

posts.post('/', function(req, res) {
    const post = new Post(req.body)
    post.save(function(err) {
      if (err) throw err
      res.send('User saved successfully!')
    })    
})

export default posts