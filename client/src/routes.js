import React from 'react'
import { IndexRoute, Route } from 'react-router'
import {
  Home,
  About,
  Posts,
  Article
} from './containers'
import App from './App.js'

export default () => {

  return (
    <Route path='/' component={App}>
      <IndexRoute component={Home} />

      <Route path='posts' component={Posts} />
      <Route path='about' component={Article} />
      <Route path='post' component={About} />

    </Route>
  )
}
