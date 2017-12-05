import { put, call } from 'redux-saga/effects'
import { fetchData } from 'API'
import { fetchBannerSuccess, fetchSongsSuccess, fetchError, fetchAlbumsSuccess, fetchSingersSuccess } from '../actions/creators'

interface InterfaceDataProps {
  banners?: any[],
  result?: any[],
  artists?: any[],
}

export function* fetchBannersWorker(action) {
  try {
    const data: InterfaceDataProps = yield call(fetchData, action.payload.config)
    yield put(fetchBannerSuccess(data.banners))
  } catch (e) {
    yield put(fetchError(e))
  }
}

export function* fetchSongsWorker(action) {
  try {
    const data: InterfaceDataProps = yield call(fetchData, action.payload.config)
    yield put(fetchSongsSuccess(data.result))
  } catch (e) {
    yield put(fetchError(e))
  }
}

export function* fetchSingersWorker(action) {
  try {
    const data: InterfaceDataProps = yield call(fetchData, action.payload.config)
    yield put(fetchSingersSuccess(data.artists))
  } catch (e) {
    yield put(fetchError(e))
  }
}

export function* fetchAlbumsWorker(action) {
  try {
    const data: InterfaceDataProps = yield call(fetchData, action.payload.config)
    yield put(fetchAlbumsSuccess(data.result))
  } catch (e) {
    yield put(fetchError(e))
  }
}
