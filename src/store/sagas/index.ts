import { takeEvery, takeLatest, select} from 'redux-saga/effects'
import { fetch } from 'actions'
import errorWorker from './error'
import { fetchWorkers, fetchDetailWorker, fetchCommentsWorker } from './fetch'

export default function* rootSaga() {
  yield takeEvery(fetch.banners.pending, fetchWorkers)
  yield takeEvery(fetch.songs.pending, fetchWorkers)
  yield takeEvery(fetch.singers.pending, fetchWorkers)
  yield takeEvery(fetch.albums.pending, fetchWorkers)
  yield takeEvery(fetch.lists.pending, fetchWorkers)
  yield takeEvery(fetch.details.pending, fetchDetailWorker)
  yield takeEvery(fetch.comments.pending, fetchCommentsWorker)
  yield takeEvery(fetch.error, errorWorker)
}
