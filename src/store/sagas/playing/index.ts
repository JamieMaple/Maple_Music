import { delay } from 'redux-saga'
import { put, all, call, select } from 'redux-saga/effects'
import { IAction, IListening } from 'commonTypes'
import { stateIdPrifex } from 'utils/stateFormat'
import fetchSong from './song'
import { selectors } from '../selectors'
import { listen, fetch, getTypeName } from 'actions'

export default function* mainPlaying(action: IAction) {
  try {
    switch (action.type) {
      case getTypeName(listen.change.song.pending):
        yield call(songChange, action)
        return
      case getTypeName(listen.prev):
      case getTypeName(listen.next):
        yield call(songPrevAndNext, action)
        return
      default:
        throw Error('no match: ' + action.type)
    }
  } catch (e) {
    yield put(fetch.error(e))
  }
}

function* songPrevAndNext(action: IAction) {
  let { index = 0, playingList } = yield select(selectors.getListening)
  if (!Array.isArray(playingList)) {
    playingList = []
  }

  if (playingList.length > 0) {
    if (action.type === getTypeName(listen.next)) {
      index = (index + 1) % playingList.length
    } else {
      index = index > 0 ? index - 1 : playingList.length - 1
    }
    const id = playingList[index].id
    yield put(listen.change.song.pending({id, index, playingList}))
  } else {
    yield put(listen.change.song.success({currentTime: 0}))
  }
}

function* songChange(action: IAction) {
  const { id, index, playingList } = action.payload.params
  const selectId = stateIdPrifex(id)
  let { [selectId]: selectSong } = yield select(selectors.getSongs)
  if (!selectSong) {
    yield call(fetchSong, action)
    const songs = yield select(selectors.getSongs)
    selectSong = songs[selectId]
  }
  const duration = selectSong.dt / 1000
  yield put(listen.change.song.success({
    id,
    index,
    isPlaying: true,
    playing: selectSong,
    duration,
    currentTime: 0,
  }))
}
