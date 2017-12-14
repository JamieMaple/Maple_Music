import { put, all, call, select } from 'redux-saga/effects'
import { IAction } from 'commonTypes'
import { fetch } from 'actions'
import { stateIdPrifex } from 'utils/stateFormat'
import { selectors } from '../selectors'

export function* handlePlayingWorker(action: IAction) {
  // const selectId = stateIdPrifex(id)
  // const listening = yield select(selectors.getListening)

  console.log(action)

  // if (!listening[selectId]) {
    // const [dataTmpl, urlTmpl] = yield all([
    //   call(fetchData, {...config, params: {ids: id}, url: musicDetailUrl}),
    //   call(fetchData, {...config, params: {id}, url: musicFileUrl}),
    // ])
    // const playing = {
    //   ...dataTmpl.songs[0], privileges: dataTmpl.privileges[0],
    //   file: urlTmpl.data[0],
    // }

    // yield put(fetch.listening.success({
    //   [selectId]: playing,
    //   playing,
    // }))
  // } else {
  //   yield put(fetch.listening.success({playing: listening[selectId]}))
  // }
}
