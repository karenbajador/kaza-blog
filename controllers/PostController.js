import express from 'express'
import { Post } from '../models'


const posts = express.Router()

posts.get('/', function(req, res) {
  console.log('hereeeeeeeeeee / ')
  console.log(req.params)

  Post.paginate({}, { page: req.param['page'] || 1, limit: req.param['limit'] || 10}, function(err, result) {
    if (err) throw err

    res.send({
      posts: result.docs,
      total: result.total,
      pages: result.pages,
      page: result.page,
      limit: result.limit
    })
  })
})

posts.get('/all', function(req, res) {
  Post.find({}, function(err, posts) {
    if (err) throw err
    console.log(posts)
    res.send(posts)
  })
})



posts.get('/:title', function(req, res) {
  Post.findOne({permalink: req.params['title']}, function(err, posts) {
    if (err) throw err
    if (posts) {
      res.send(posts)
    } else {
      res.send({})
    }
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

    console.log('@@@@@@@@@@')
    console.log(req.body)
  console.log('@@@@@@@@@@')
    const post = new Post(req.body)
    post.save(function(err) {
      console.log('-----')
      console.log(err)
      console.log('-----')
      if (err) throw err
      res.send('User saved successfully!')
    })    
})

export default posts