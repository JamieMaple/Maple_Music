import { put, call, select } from 'redux-saga/effects'
import { IAction, IComments } from 'commonTypes'
import { fetch } from 'actions'
import fetchData from 'API'
import { stateIdPrifex } from 'utils/stateFormat'
import { selectors } from '../selectors'

export function* fetchCommentList(action: IAction) {
  const selectId = stateIdPrifex(action.payload.params.id)
  const comments: IComments = yield select(selectors.getComments)

  if (!comments.list[selectId]) {
    const dataTmpl = yield call(fetchData.fetchListsComments, action.payload.params)
    const data = {
      [selectId]: {
        all: dataTmpl.comments,
        top: dataTmpl.topComments,
        hot: dataTmpl.hotComments,
      },
    }
    yield put(fetch.comments.list.success(data))
  } else {
    yield put(fetch.comments.list.success())
  }
}

export function* fetchCommentAlbum(action: IAction) {
  const selectId = stateIdPrifex(action.payload.params.id)
  const comments: IComments = yield select(selectors.getComments)

  if (!comments.album[selectId]) {
    const dataTmpl = yield call(fetchData.fetchAlbumComments, action.payload.params)
    const data = {
      [selectId]: {
        all: dataTmpl.comments,
        top: dataTmpl.topComments,
        hot: dataTmpl.hotComments,
      },
    }
    yield put(fetch.comments.album.success(data))
  } else {
    yield put(fetch.comments.album.success())
  }
}
