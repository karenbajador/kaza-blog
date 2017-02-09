import * as ACTIONS from '../actions'

const initialState = {

}


export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case ACTIONS.LOAD_POSTS:
      return {
        ...state,
      }
    case ACTIONS.LOAD_POSTS_SUCCEEDED:
      return {
        ...state,
        data: action.posts
      }
    case ACTIONS.LOAD_POSTS_FAILED:
      return {
        ...state,
      }
    default:
      return state
  }
}




