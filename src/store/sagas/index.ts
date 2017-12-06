import { takeEvery, takeLatest, select} from 'redux-saga/effects'
import { FETCH_BANNER, FETCH_SONGS, FETCH_ALBUMS, FETCH_SINGERS, FETCH_ERROR } from '../actions/types'
import errorWorker from './error'
import { fetchWorkers } from './fetch'

export default function* rootSaga() {
  yield takeEvery(FETCH_BANNER, fetchWorkers)
  yield takeEvery(FETCH_SONGS, fetchWorkers)
  yield takeEvery(FETCH_SINGERS, fetchWorkers)
  yield takeEvery(FETCH_ALBUMS, fetchWorkers)
  yield takeEvery(FETCH_ERROR, errorWorker)
}
