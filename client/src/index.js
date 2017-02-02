import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import App from './App'

import {
  Home,
  About,
  Posts,
  Article
} from './containers'
import './index.css'

ReactDOM.render(
  (
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='home' component={Home} />
        <Route path='posts' component={Posts} />
        <Route path='about' component={About} />
        <Route path='article/:title' component={Article} />

      </Route>
    </Router>
  ),
  document.getElementById('root')
)



