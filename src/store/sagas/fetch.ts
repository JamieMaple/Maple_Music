import { put, call, select } from 'redux-saga/effects'
import { fetchData } from 'API'
import { IDetails, IAction, IComments } from 'commonTypes'
import { fetch, getTypeName } from 'actions'
import { stateIdPrifex } from 'utils/stateFormat'
import { selectors } from './selectors'

interface InterfaceDataProps {
  banners?: any,
  result?: any,
  artists?: any,
  playlists?: any,
  albums?: any,
  album?: any,
  songs?: any,
  playlist?: any,
  privileges: any,
  comments?: any,
  hotComments?: any,
  topComments?: any,
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
    const selectId = stateIdPrifex(action.payload.config.params.id)
    const details: IDetails = yield select(selectors.getDetails)
    const { dataType } = action.payload

    if (details[dataType]) {
      if (!details[dataType][selectId]) {
        const dataTmpl: InterfaceDataProps = yield call(fetchData, action.payload.config)
        const data = {
          [dataType]: {
            ...details[dataType],
            [selectId]: {
              info: dataTmpl.album  || dataTmpl.playlist,
              songs: dataTmpl.songs || dataTmpl.privileges,
            },
          },
        }
        yield put(fetch.details.success({...details, ...data}))
      }
    } else {
      throw Error('Error: no such dataType ' + dataType + '.')
    }
  } catch (error) {
    yield put(fetch.error(error))
  }
}

export function* fetchCommentsWorker(action) {
  try {
    const selectId = stateIdPrifex(action.payload.config.params.id)
    const comments: IComments = yield select(selectors.getComments)
    const { dataType } = action.payload

    if (comments[dataType]) {
      if (!comments[dataType][selectId]) {
        const dataTmpl: InterfaceDataProps = yield call(fetchData, action.payload.config)
        const data = {
          ...comments,
          [dataType]: {
            ...comments[dataType],
            [selectId]: {
              all: dataTmpl.comments,
              top: dataTmpl.topComments,
              hot: dataTmpl.hotComments,
            },
          },
        }
        yield put(fetch.comments.success(data))
      }
    } else {
      throw Error('Error: no such dataType ' + dataType + '.')
    }
  } catch (error) {
    yield put(fetch.error(error))
  }
}
