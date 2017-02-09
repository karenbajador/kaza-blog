import { call, put, takeLatest } from 'redux-saga/effects'
import * as Api from '../../services/local'
import * as ACTIONS from '../actions'


function* loadPosts(action) {
  try {
    const posts = yield call(Api.loadPosts, action.payload)
    yield put({type: ACTIONS.LOAD_POSTS_SUCCEEDED, posts: posts})
  } catch (e) {
    yield put({type: ACTIONS.LOAD_POSTS_FAILED, message: e.message})
  }
}


function* postsSaga() {
  yield takeLatest(ACTIONS.LOAD_POSTS, loadPosts)
}

export default postsSaga

