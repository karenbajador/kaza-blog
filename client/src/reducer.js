import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import posts from './redux/reducers/posts'
import article from './redux/reducers/article'



const reducers = {
  // ... your other reducers here ...
  posts,
  article,
  routing: routerReducer

}



export default function getReducer() {
  return combineReducers(reducers)
}

