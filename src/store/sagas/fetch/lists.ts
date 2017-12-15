import { put, call, select } from 'redux-saga/effects'
import { IAction } from 'commonTypes'
import { fetch } from 'actions'
import fetchData from 'API'
import { stateIdPrifex } from 'utils/stateFormat'
import { selectors } from '../selectors'

export default function* fetchLists(action: IAction) {
  const { params } =  action.payload
  const { offset = 0, limit = 30 } = params
  const key = encodeURIComponent(params.cat)
  const { [key]: list = [] } = yield select(selectors.getLists)
  if (list.length < offset + limit) {
    const listsTmpl = yield call(fetchData.fetchLists, params)
    const listsData = [...list, ...listsTmpl.playlists]
    yield put(fetch.lists.success({[key]: listsData}))
    return
  } else {
    yield put(fetch.lists.success())
  }
}
