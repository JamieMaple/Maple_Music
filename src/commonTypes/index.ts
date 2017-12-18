/*
** @@ global state tree structure names
** @@ ... some sub singers etc
** @@ with key for view page
*/
export interface IRecommend {
  banners?: any[],
  songs?: any[],
  singers?: any[],
  lists?: any[],
  [prop: string]: any,
}

export interface IDetails {
  album?: any,
  isLoading?: boolean,
  list?: any,
}

export interface IComments {
  album?: any,
  isLoading?: boolean,
  list?: any,
}

export interface IListening {
  modes: {
    mode: number,
    order?: number,
    random?: number,
    loop?: number,
    length: number,
  },
  id: number,
  index: number,
  playing?: any,
  isPlaying?: boolean,
  playingList?: any[],
  currentTime?: number,
  changeTime?: number,
  buffered?: number,
  duration?: number|string,
  volume?: number,
  [prop: string]: any,
}

export interface IStateTree {
  isLoading?: boolean,
  search: any,
  listening: IListening,
  lists: any,
  albums: any,
  details: IDetails,
  comments: IComments,
  singers: any[],
  songs: any,
  recommend: IRecommend,
}

export interface IHistory {
  action: string,
  length: number,
  go: (n: number) => {},
  forward: () => {},
  back: () => {},
  push: any,
  pop: () => {},
}

export interface IMatch {
  isExtract: boolean,
  params: any,
  path: string,
  url: string,
}

export interface ILocation {
  hash: string,
  pathname: string,
  search: string,
}

export interface IRouteProps {
  history: IHistory,
  location: ILocation,
  match: IMatch,
}

export interface ICommonElementProps {
  className?: string,
  style?: object,
  children?: any,
}

export interface IAlbum {
  picUrl?: string,
  name?: string,
  singer?: string,
  artist?: any,
  artists?: any,
  publishDate?: any,
  playNum?: number,
  tags?: string[],
  intro?: string,
  url?: string,
}

export interface IPlayList {
  name?: string,
  coverImgUrl?: string,
  creator?: any,
  publishDate?: any,
  tags?: string[],
  playNum?: number,
  intro?: string,
  url?: string,
}

export interface IMusicInfo {
  song?: string,
  singer?: string,
  image?: string,
}

export interface ISinger {
  picUrl?: string,
  name?: string,
  url?: string,
}

export interface ISong {
  id: number,
  name?: string,
  singer?: string,
  time?: number|string,
  album?: string,
  icon?: string,
  picUrl?: string,
  popularity?: number,
  index?: number,
  song?: any,
}

export interface INavigatorProps {
  text: string,
  url: string,
  component?: any,
}

export interface IBannerItem {
  pic: string,
  url: string,
}

export interface ICommentsList {
  all: any[],
  hot: any[],
  top: any[],
}

export interface IComment {
  content: string,
  user: any,
  time: number,
  likeCount?: number,
}

// event handler

export interface IEventHandler {
  onClick?: any,
  onDoubleClick?: any,
}

// some useful api with react common element props like `className`, `style`
export interface IAlbumProps extends IAlbum, ICommonElementProps {}

export interface IPlayListProps extends IPlayList, ICommonElementProps {}

export interface ISingerProps extends ISinger, ICommonElementProps {}

export interface ISongProps extends ISong, ICommonElementProps {}

export interface ITitleBar extends ICommonElementProps {
  text: string,
}

export interface IBannerItemProps extends IBannerItem, ICommonElementProps {}

// data api for config

export interface IFetchDataConfig {
  method?: string,
  url?: string,
  params?: any,
  data?: any,
  timeout?: number,
}

// actions

export interface IPayload {
  params?: any,
  data?: any,
}

export interface IAction {
  type: string,
  payload: IPayload,
}
