import { call, put, takeLatest } from 'redux-saga/effects'
import * as Api from '../../services/local'
import * as ACTIONS from '../actions'


function* loadArticle(action) {
  try {
    const article = yield call(Api.loadArticle, action.payload)
    yield put({type: ACTIONS.LOAD_ARTICLE_SUCCEEDED, article: article})
  } catch (e) {
    yield put({type: ACTIONS.LOAD_ARTICLE_FAILED, message: e.message})
  }
}


function* articleSaga() {
  yield takeLatest(ACTIONS.LOAD_ARTICLE, loadArticle)
}

export default articleSaga

