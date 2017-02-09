import { fork } from 'redux-saga/effects'
import postsSaga from './redux/sagas/posts'
import articleSaga from './redux/sagas/article'


export default function* root() {
  yield [
    fork(postsSaga),
    fork(articleSaga)
  ]
}