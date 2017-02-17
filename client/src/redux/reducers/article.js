import * as ACTIONS from '../actions'

const initialState = {

}


export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case ACTIONS.LOAD_ARTICLE:
      return {
        ...state,
      }
    case ACTIONS.LOAD_ARTICLE_SUCCEEDED:
      return {
        ...state,
        data: action.article,
        error: null
      }
    case ACTIONS.LOAD_ARTICLE_FAILED:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}




