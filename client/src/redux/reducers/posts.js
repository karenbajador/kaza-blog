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
        ...action.posts,
        error: null

      }
    case ACTIONS.LOAD_POSTS_FAILED:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}




