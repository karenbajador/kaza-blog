import { call, put, takeLatest } from 'redux-saga/effects'
import * as Api from '../../services/local'
import * as ACTIONS from '../actions'
import { checkStatus } from './utils'

function* loadPosts(action) {
  try {
    const response = yield call(Api.loadPosts, action.payload)
    const posts = yield checkStatus(response)
    if (posts.length === 0) throw 'There are no posts available.'

    yield put({type: ACTIONS.LOAD_POSTS_SUCCEEDED, posts: posts})
  } catch (error) {
    yield put({type: ACTIONS.LOAD_POSTS_FAILED, error: error.statusText || error})
  }
}




function* postsSaga() {
  yield takeLatest(ACTIONS.LOAD_POSTS, loadPosts)
}

export default postsSaga

