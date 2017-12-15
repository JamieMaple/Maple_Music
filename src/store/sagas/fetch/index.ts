import { call, put } from 'redux-saga/effects'
import { IAction } from 'commonTypes'
import { fetch, getTypeName } from 'actions'
import fetchRecommendWorker from './recommend'
import fetchLists from './lists'
import { fetchDetailAlbum, fetchDetailList } from './details'
import { fetchNewestAlbums, fetchNewestSongs } from './newest'
import { fetchCommentAlbum, fetchCommentList } from './comments'

export default function* mainFetch(action: IAction) {
  try {
    switch (action.type) {
      case getTypeName(fetch.recommend.pending):
        yield call(fetchRecommendWorker, action)
        return
      case getTypeName(fetch.lists.pending):
        yield call(fetchLists, action)
        return
      case getTypeName(fetch.newest.songs.pending):
        yield call(fetchNewestSongs, action)
        return
      case getTypeName(fetch.newest.albums.pending):
        yield call(fetchNewestAlbums, action)
        return
      case getTypeName(fetch.details.list.pending):
        yield call(fetchDetailList, action)
        return
      case getTypeName(fetch.details.album.pending):
        yield call(fetchDetailAlbum, action)
        return
      case getTypeName(fetch.comments.list.pending):
        yield call(fetchCommentList, action)
        return
      case getTypeName(fetch.comments.album.pending):
        yield call(fetchCommentAlbum, action)
        return
      default:
        throw Error('no match: ' + action.type + ' !')
    }
  } catch (error) {
    yield put(fetch.error(error))
  }
}
