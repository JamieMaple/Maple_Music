/*
** @@ global state tree structure names
** @@ ... some sub singers
** @@ with key for view page
*/
export interface IStateTree {
  search?: any,
  listening?: any,
  lists?: any,
  albums?: any,
  details?: any,
  singers?: any,
  songs?: any,
}

export const stateTreeTypes: IStateTree = {
  search: {},
  listening: {},
  albums: {
    newest: 'newest',
  },
  lists: {
    recommend: 'recommend',
    playList: 'playList',
  },
  details: 'details',
  singers: {
    recommend: 'recommend',
  },
  songs: {
    recommend: 'recommend',
    newest: 'newest',
  },
}

export interface IHistory {
  action: string,
  length: number,
  go: (n: number) => {},
  goForward: () => {},
  goBack: () => {},
}

export interface IMatch {
  isExtract: boolean,
  params: any,
  path: string,
  url: string,
}

export interface ILocation {
  hash: string,
  pathName: string,
  search: string,
}

export interface IRouteProps {
  histroy: IHistory,
  location: ILocation,
  match: IMatch,
}

export interface ICommonElementProps {
  className?: string,
  style?: object,
  Children?: JSX.Element[],
}

export interface IAlbum {
  picUrl?: string,
  coverImgUrl?: string,
  name?: string,
  singer?: string,
  creator?: any,
  url?: string,
  playNum?: number,
  listIntro?: string,
  albumIntro?: string,
  tags?: string[],
  intro?: string,
}

export interface IMusicInfo {
  song?: string,
  singer?: string,
}

export interface ISinger {
  picUrl?: string,
  name?: string,
  url?: string,
}

export interface ISong {
  name?: string,
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

// some useful api with react common element props like `className`, `style`
export interface IAlbumProps extends IAlbum, ICommonElementProps {}

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
}

// actions

export interface IPayload {
  config?: any,
  dataType: string,
  banners?: any[],
  songs?: object,
  singers?: object,
  albums?: object,
  data?: object,
}

export interface IAction {
  type: string,
  payload: IPayload,
}
