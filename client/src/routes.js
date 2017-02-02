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

      <Route path='home' component={Home} />
      <Route path='posts' component={Posts} />
      <Route path='about' component={About} />
      <Route path='article/:title' component={Article} />

    </Route>
  )
}

