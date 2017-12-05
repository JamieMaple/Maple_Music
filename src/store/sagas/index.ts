import { takeEvery, takeLatest} from 'redux-saga/effects'
import { FETCH_BANNER, FETCH_SONGS, FETCH_ALBUMS, FETCH_SINGERS } from '../actions/types'
import * as fetchWathers from './fetch'

export default function* rootSaga() {
  yield takeLatest(FETCH_BANNER, fetchWathers.fetchBannersWorker)
  yield takeLatest(FETCH_SONGS, fetchWathers.fetchSongsWorker)
  yield takeLatest(FETCH_SINGERS, fetchWathers.fetchSingersWorker)
  yield takeLatest(FETCH_ALBUMS, fetchWathers.fetchAlbumsWorker)
}
