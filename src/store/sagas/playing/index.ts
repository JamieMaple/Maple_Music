import { put, all, call, select } from 'redux-saga/effects'
import { IAction } from 'commonTypes'
import { stateIdPrifex } from 'utils/stateFormat'
import fetchSong from './song'
import { selectors } from '../selectors'
import { listen, fetch } from 'actions'

export function* handlePlayingWorker(action: IAction) {
  try {
    const { id, index, playingList = [] } = action.payload.params
    const selectId = stateIdPrifex(id)
    let { [selectId]: selectSong } = yield select(selectors.getSongs)
    if (!selectSong) {
      yield call(fetchSong, action)
      const songs = yield select(selectors.getSongs)
      selectSong = songs[selectId]
    }
    const duration = selectSong.dt / 1000
    yield put(listen.change.success({
      id,
      index,
      isPlaying: true,
      playing: selectSong,
      playingList,
      duration,
      currentTime: 0 ,
    }))
  } catch (e) {
    yield call(fetch.error())
  }
}
