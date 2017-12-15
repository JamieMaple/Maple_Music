import { put, call } from 'redux-saga/effects'
import { fetch } from 'actions'
import { IAction } from 'commonTypes'
import fetchData from 'API'

export function* fetchNewestAlbums(action: IAction) {
  const { params } = action.payload
  const albumsTmpl = yield call(fetchData.fetchNewest.albums, params)
  const albums = {newest: albumsTmpl.albums}
  yield put(fetch.newest.albums.success(albums))
}

export function* fetchNewestSongs(action: IAction) {
  const { params } = action.payload
  const songsTmpl = yield call(fetchData.fetchNewest.songs, params)
  const songs = {newest: songsTmpl.result}
  yield put(fetch.newest.songs.success(songs))
}
