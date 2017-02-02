import React from 'react'
import ReactDOM from 'react-dom'
import { Router, hashHistory } from 'react-router'
import getRoutes from './routes'

import './index.css'

ReactDOM.render(
  (
    <Router history={hashHistory}>
      { getRoutes() }
    </Router>
  ),
  document.getElementById('root')
)



