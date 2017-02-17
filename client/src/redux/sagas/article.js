import { call, put, takeLatest } from 'redux-saga/effects'
import * as Api from '../../services/local'
import * as ACTIONS from '../actions'
import { checkStatus } from './utils'


function* loadArticle(action) {

  try {
    const response = yield call(Api.loadArticle, action.permalink)
    const article = yield checkStatus(response)
    console.log('ano ba ang article')
    console.log(article)
    if (Object.keys(article).length === 0) throw 'The article cannot be found.'

    yield put({type: ACTIONS.LOAD_ARTICLE_SUCCEEDED, article: article})
  } catch (error) {
    console.log('what is the error??? ')
    console.log(error.statusText)
    console.log('hayyuuuu')
    console.log(JSON.stringify(error))
    yield put({ type: ACTIONS.LOAD_ARTICLE_FAILED, error: error.statusText || error })
  }

}


function* articleSaga() {
  yield takeLatest(ACTIONS.LOAD_ARTICLE, loadArticle)
}

export default articleSaga

