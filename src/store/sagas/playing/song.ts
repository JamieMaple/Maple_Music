import { put, all, call, select } from 'redux-saga/effects'
import { IAction, IComments } from 'commonTypes'
import { listen, fetch } from 'actions'
import fetchData from 'API'
import { stateIdPrifex } from 'utils/stateFormat'
import { selectors } from '../selectors'

export default function* fetchSong(action: IAction) {
  const { id } = action.payload.params
  const selectId = stateIdPrifex(id)
  const songs = yield select(selectors.getSongs)
  let songData = { dt: 0 }

  if (!songs[selectId]) {
    const [
      songDetailsTmpl,
      songFileTmpl,
    ] = yield all([
      call(fetchData.fetchSongDetails, { ids: id }),
      call(fetchData.fetchSongFile, { id })])
    songData = {
      ...songDetailsTmpl.songs[0],
      privileges: songDetailsTmpl.privileges[0],
      file: songFileTmpl.data[0],
    }
    yield put(fetch.song.success({[selectId]: songData}))
  } else {
    yield put(fetch.song.success())
  }
  // yield put(listen.change({ playing: songData, isPlaying: true, id, index, duration: songData.dt / 1000, currentTime: 0 }))
}
