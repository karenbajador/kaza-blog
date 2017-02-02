import express from 'express'
import bodyParser from 'body-parser'
import './config/db'
import { postController } from './controllers'


const app = express()


app.use(bodyParser.urlencoded({ extended: false }))

app.use('/posts', postController)
app.use('/posts1', postController)

app.set('port', (process.env.PORT || 3001))

app.listen(app.get('port'), function() {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`)
})






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







