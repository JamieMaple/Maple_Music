import { put, all, call } from 'redux-saga/effects'
import { fetch } from 'actions'
import { IAction } from 'commonTypes'
import fetchData from 'API'

export default function* fetchRecommendWorker(action: IAction) {
  const { fetchRecommend } = fetchData
  const [
    bannersTmpl, songsTmpl, singersTmpl, listsTmpl,
  ] = yield all([
    call(fetchRecommend.banners),
    call(fetchRecommend.songs),
    call(fetchRecommend.singers, { limit: 10 }),
    call(fetchRecommend.lists, {limit: 15}),
  ])
  const banners = bannersTmpl.banners
  const songs = songsTmpl.result
  const singers = singersTmpl.artists
  const lists = listsTmpl.result
  yield put(fetch.recommend.success({banners, songs, singers, lists}))
}
