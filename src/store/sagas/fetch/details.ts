import { put, call, select } from 'redux-saga/effects'
import { IDetails, IAction } from 'commonTypes'
import { fetch } from 'actions'
import fetchData from 'API'
import { stateIdPrifex } from 'utils/stateFormat'
import { selectors } from '../selectors'

export function* fetchDetailList(action: IAction) {
  const selectId = stateIdPrifex(action.payload.params.id)
  const details: IDetails = yield select(selectors.getDetails)
  if (!details.list[selectId]) {
    const listDetailTmpl = yield call(fetchData.fetchListsDetails, action.payload.params)
    const listDetail = {
      [selectId]: {
        ...listDetailTmpl.playlist,
        songs:  listDetailTmpl.privileges,
      },
    }
    yield put(fetch.details.list.success(listDetail))
  } else {
    yield put(fetch.details.list.success())
  }
}

export function* fetchDetailAlbum(action: IAction) {
  const selectId = stateIdPrifex(action.payload.params.id)
  const details: IDetails = yield select(selectors.getDetails)
  if (!details.album[selectId]) {
    const albumDetailTmpl = yield call(fetchData.fetchAlbumDetails, action.payload.params)
    const albumDetail = {
      [selectId]: {
        ...albumDetailTmpl.album,
        songs:  albumDetailTmpl.songs,
      },
    }
    yield put(fetch.details.album.success(albumDetail))
  } else {
    yield put(fetch.details.album.success())
  }
}
