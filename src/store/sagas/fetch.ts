import { put, call } from 'redux-saga/effects'
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
}

export function* fetchWorkers(action: InterfaceAction) {
  try {
    const dataTmpl: InterfaceDataProps = yield call(fetchData, action.payload.config)
    let data: any = null
    switch (action.type) {
      case FETCH_BANNER:
        data = dataTmpl.banners
        yield put(fetchBannerSuccess(data))
        return
      case FETCH_ALBUMS:
        data = {[action.payload.dataType]: dataTmpl.result}
        yield put(fetchAlbumsSuccess(data))
        return
      case FETCH_SONGS:
        data = {[action.payload.dataType]: dataTmpl.result}
        yield put(fetchSongsSuccess(data))
        return
      case FETCH_SINGERS:
        data = {[action.payload.dataType]: dataTmpl.artists}
        yield put(fetchSingersSuccess(data))
        return
      default:
        throw Error('Fetch error: No match type!')
    }
  } catch (error) {
    yield put(fetchError(error))
  }
}
