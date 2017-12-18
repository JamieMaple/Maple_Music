import { delay } from 'redux-saga'
import { put, all, call, select, fork } from 'redux-saga/effects'
import { IAction, IListening } from 'commonTypes'
import { stateIdPrifex } from 'utils/stateFormat'
import fetchSong from './song'
import { selectors } from '../selectors'
import { listen, fetch, getTypeName } from 'actions'

const getIndex = (index: number, length: number): number => {
  if (index >= length) {
    return index % length
  } else if (index < 0) {
    return length - 1
  } else {
    return index
  }
}

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
  const { mode, random, length } = yield select(selectors.getMode)
  if (!playingList) {
    return
  }

  if (mode !== random) {
    if (action.type === getTypeName(listen.next)) {
      index = getIndex(index + 1, playingList.length)
    } else {
      index = getIndex(index - 1, playingList.length)
    }
  } else {
    const indexRandom = getIndex(Math.floor(Math.random() * playingList.length), playingList.length)
    index = index === indexRandom ? getIndex(index + 1, playingList.length) : indexRandom
  }
  const id = playingList[index].id

  yield put(listen.change.song.success({index, id}))
  yield put(listen.change.song.pending({index, id}))
}

function* songChange(action: IAction) {
  const { id, index } = action.payload.params
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
