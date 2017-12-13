import { takeEvery, takeLatest, select } from 'redux-saga/effects'
import { fetch, listen } from 'actions'
import errorWorker from './error'
import { fetchIndexViewWorkers, fetchDetailWorker, fetchCommentWorker, fetchListeningWorker } from './fetch'

export default function* rootSaga() {
  yield takeEvery(fetch.banners.pending, fetchIndexViewWorkers)
  yield takeEvery(fetch.songs.pending, fetchIndexViewWorkers)
  yield takeEvery(fetch.singers.pending, fetchIndexViewWorkers)
  yield takeEvery(fetch.albums.pending, fetchIndexViewWorkers)
  yield takeEvery(fetch.lists.pending, fetchIndexViewWorkers)
  yield takeEvery(fetch.details.pending, fetchDetailWorker)
  yield takeEvery(fetch.comments.pending, fetchCommentWorker)
  yield takeLatest(fetch.listening.pending, fetchListeningWorker)
  yield takeEvery(fetch.error, errorWorker)
}
