import { put, all, call, select, throttle } from 'redux-saga/effects'
import { IDetails, IAction, IComments } from 'commonTypes'
import { fetch, listen, getTypeName } from 'actions'
import fetchData from 'API'
import { stateIdPrifex } from 'utils/stateFormat'
import { selectors } from '../selectors'

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
      case getTypeName(fetch.song.pending):
        yield call(fetchSong, action)
        return
      default:
        throw Error('no match: ' + action.type + ' !')
    }
  } catch (error) {
    yield put(fetch.error(error))
  }
}

function* fetchNewestAlbums(action: IAction) {
  const { params } = action.payload
  const albumsTmpl = yield call(fetchData.fetchNewest.albums, params)
  const albums = {newest: albumsTmpl.albums}
  yield put(fetch.newest.albums.success(albums))
}

function* fetchNewestSongs(action: IAction) {
  const { params } = action.payload
  const songsTmpl = yield call(fetchData.fetchNewest.songs, params)
  const songs = {newest: songsTmpl.result}
  yield put(fetch.newest.songs.success(songs))
}

function* fetchSong(action: IAction) {
  const { id } = action.payload.params
  const selectId = stateIdPrifex(id)
  const songs = yield select(selectors.getSong)
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
    songData = songs[selectId]
  }

  yield put(listen.change({ playing: songData, duration: songData.dt / 1000, currentTime: 0 }))
}

function* fetchLists(action: IAction) {
  const { params } =  action.payload
  const { offset = 0, limit = 30 } = params
  const key = encodeURIComponent(params.cat)
  const { [key]: list = [] } = yield select(selectors.getLists)
  if (list.length < offset + limit) {
    const listsTmpl = yield call(fetchData.fetchLists, params)
    const listsData = [...list, ...listsTmpl.playlists]
    yield put(fetch.lists.success({[key]: listsData}))
  }
}

function* fetchRecommendWorker(action: IAction) {
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

function* fetchDetailList(action: IAction) {
  const selectId = stateIdPrifex(action.payload.params.id)
  const details: IDetails = yield select(selectors.getDetails)
  if (!details.list[selectId]) {
    const listDetailTmpl = yield call(fetchData.fetchListsDetails, action.payload.params)
    const listDetail = {
      [selectId]: {
        ...listDetailTmpl.playlist,
        songs:  listDetailTmpl.privileges,
      },
    }
    yield put(fetch.details.list.success(listDetail))
  }
}

function* fetchDetailAlbum(action: IAction) {
  const selectId = stateIdPrifex(action.payload.params.id)
  const details: IDetails = yield select(selectors.getDetails)
  if (!details.album[selectId]) {
    const albumDetailTmpl = yield call(fetchData.fetchAlbumDetails, action.payload.params)
    const albumDetail = {
      [selectId]: {
        ...albumDetailTmpl.album,
        songs:  albumDetailTmpl.songs,
      },
    }
    yield put(fetch.details.album.success(albumDetail))
  }
}

function* fetchCommentList(action: IAction) {
  const selectId = stateIdPrifex(action.payload.params.id)
  const comments: IComments = yield select(selectors.getComments)

  if (!comments.list[selectId]) {
    const dataTmpl = yield call(fetchData.fetchListsComments, action.payload.params)
    const data = {
      [selectId]: {
        all: dataTmpl.comments,
        top: dataTmpl.topComments,
        hot: dataTmpl.hotComments,
      },
    }
    yield put(fetch.comments.list.success(data))
  }
}

function * fetchCommentAlbum(action: IAction) {
  const selectId = stateIdPrifex(action.payload.params.id)
  const comments: IComments = yield select(selectors.getComments)

  if (!comments.album[selectId]) {
    const dataTmpl = yield call(fetchData.fetchAlbumComments, action.payload.params)
    const data = {
      [selectId]: {
        all: dataTmpl.comments,
        top: dataTmpl.topComments,
        hot: dataTmpl.hotComments,
      },
    }
    yield put(fetch.comments.album.success(data))
  }
}
