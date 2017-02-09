import React from 'react'
import ReactDOM from 'react-dom'
import { Router, hashHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { syncHistoryWithStore } from 'react-router-redux'

import getRoutes from './routes'
import getReducers from './reducer'
import mySagas from './sagas'

import './index.css'

const sagaMiddleware = createSagaMiddleware()
let store = createStore(
  getReducers(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(mySagas)


// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={history}>
        { getRoutes() }
      </Router>
    </Provider>
  ),
  document.getElementById('root')
)



