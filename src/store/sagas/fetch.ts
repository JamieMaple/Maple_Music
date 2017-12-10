import { put, call, select } from 'redux-saga/effects'
import { fetchData } from 'API'
import { IAction } from 'commonTypes'
import { fetch, getTypeName } from 'actions'

interface InterfaceDataProps {
  banners?: any,
  result?: any,
  artists?: any,
  playlists?: any,
  albums?: any,
  playlist?: any,
  privileges: any,
}

export function* fetchWorkers(action: IAction) {
  try {
    const dataTmpl: InterfaceDataProps = yield call(fetchData, action.payload.config)
    const data: any = dataTmpl.banners
      || dataTmpl.result || dataTmpl.playlists || dataTmpl.albums
      || dataTmpl.artists
      || []
    const dataObj: object = {[action.payload.dataType]: data}

    switch (action.type) {
      case getTypeName(fetch.banners.pending):
        yield put(fetch.banners.success(data))
        return
      case getTypeName(fetch.albums.pending):
        yield put(fetch.albums.success(dataObj))
        return
      case getTypeName(fetch.lists.pending):
        yield put(fetch.lists.success(dataObj))
        return
      case getTypeName(fetch.songs.pending):
        yield put(fetch.songs.success(dataObj))
        return
      case getTypeName(fetch.singers.pending):
        yield put(fetch.singers.success(dataObj))
        return
      default:
        throw Error('Fetch error: No match type!')
    }
  } catch (error) {
    yield put(fetch.error(error))
  }
}

export function* fetchDetailWorker(action: IAction) {
  try {
    const dataTmpl: InterfaceDataProps = yield call(fetchData, action.payload.config)
    const data = {[`id=${action.payload.config.params.id}`]: {
      playlist: dataTmpl.playlist,
      privileges: dataTmpl.privileges,
    }}
    yield put(fetch.details.success(data))
  } catch (error) {
    yield put(fetch.error(error))
  }
}
