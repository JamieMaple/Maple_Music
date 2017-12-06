import { put, call, select } from 'redux-saga/effects'
import { fetchData } from 'API'
import { InterfaceAction } from 'commonTypes'
import {
  fetchBannerSuccess,
  fetchSongsSuccess,
  fetchError,
  fetchAlbumsSuccess,
  fetchSingersSuccess,
} from 'actions/creators'
import {
  FETCH_BANNER,
  FETCH_SONGS,
  FETCH_ALBUMS,
  FETCH_SINGERS,
} from 'actions/types'

interface InterfaceDataProps {
  banners?: any[],
  result?: any[],
  artists?: any[],
  playlists?: any[],
}

export function* fetchWorkers(action: InterfaceAction) {
  try {
    const dataTmpl: InterfaceDataProps = yield call(fetchData, action.payload.config)
    const data: any = dataTmpl.banners || dataTmpl.result || dataTmpl.artists || dataTmpl.playlists || []
    const dataObj: object = {[action.payload.dataType]: data}
    const test = yield select()
    console.log(test)

    switch (action.type) {
      case FETCH_BANNER:
        yield put(fetchBannerSuccess(data))
        return
      case FETCH_ALBUMS:
        yield put(fetchAlbumsSuccess(dataObj))
        return
      case FETCH_SONGS:
        yield put(fetchSongsSuccess(dataObj))
        return
      case FETCH_SINGERS:
        yield put(fetchSingersSuccess(dataObj))
        return
      default:
        throw Error('Fetch error: No match type!')
    }
  } catch (error) {
    yield put(fetchError(error))
  }
}
