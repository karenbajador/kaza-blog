import express from 'express'
import bodyParser from 'body-parser'
import './config/db'
import { postController } from './controllers'


const app = express()


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api/posts', postController)
app.use('/api/article', postController)


app.set('port', (process.env.PORT || 3001))

app.listen(app.get('port'), function() {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`)
})


// // configure the app to use bodyParser()
// app.use(bodyParser.urlencoded({
//   extended: true
// }));




// if (process.env.NODE_ENV === 'development') {
//   // Configuration
//   app.configure('development', () => {
//     app.set('dburi', 'mongodb://localhost:27017/kaza-blog')
//   })
// }


// Express only serves static assets in production
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'))
// }







