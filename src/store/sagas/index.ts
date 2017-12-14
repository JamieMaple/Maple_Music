import { takeEvery, takeLatest, select } from 'redux-saga/effects'
import { fetch, listen } from 'actions'
import errorWorker from './error'
import mainFetch from './fetch'
import { handlePlayingWorker } from './playing'

export default function* rootSaga() {
  yield takeLatest(fetch.recommend.pending, mainFetch)
  yield takeLatest(fetch.lists.pending, mainFetch)
  yield takeLatest(fetch.newest.songs.pending, mainFetch)
  yield takeLatest(fetch.newest.albums.pending, mainFetch)
  // parallel
  yield takeEvery(fetch.details.album.pending, mainFetch)
  yield takeEvery(fetch.details.list.pending, mainFetch)
  yield takeEvery(fetch.comments.album.pending, mainFetch)
  yield takeEvery(fetch.comments.list.pending, mainFetch)
  yield takeEvery(fetch.error, errorWorker)

  yield takeLatest(fetch.song.pending, mainFetch)
}
