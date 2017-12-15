import { takeEvery, takeLatest, select, all } from 'redux-saga/effects'
import { fetch, listen } from 'actions'
import errorWorker from './error'
import mainFetch from './fetch'
import mainPlaying from './playing'

export default function* rootSaga() {
  yield all([
    takeLatest(fetch.recommend.pending, mainFetch),
    takeLatest(fetch.lists.pending, mainFetch),
    takeLatest(fetch.newest.songs.pending, mainFetch),
    takeLatest(fetch.newest.albums.pending, mainFetch),
    takeLatest(fetch.song.pending, mainFetch),
    takeLatest(listen.change.song.pending, mainPlaying),
    takeLatest(listen.next, mainPlaying),
    takeLatest(listen.prev, mainPlaying),
    takeEvery(fetch.details.album.pending, mainFetch),
    takeEvery(fetch.details.list.pending, mainFetch),
    takeEvery(fetch.comments.album.pending, mainFetch),
    takeEvery(fetch.comments.list.pending, mainFetch),
    takeEvery(fetch.error, errorWorker),
  ])
}
