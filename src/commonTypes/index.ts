/*
** @@ global state tree structure names
** @@ ... some sub singers
** @@ with key for view page
*/
export interface InterfaceStateTree {
  search?: any,
  listening?: any,
  albums?: any,
  singers?: any,
  songs?: any,
}

export const stateTreeTypes: InterfaceStateTree = {
  search: {},
  listening: {},
  albums: {
    recommend: 'recommend',
    playList: 'playList',
    newest: 'newest',
  },
  singers: {
    recommend: 'recommend',
  },
  songs: {
    recommend: 'recommend',
  },
}

export interface InterfaceCommonElementProps {
  className?: string,
  style?: object,
}

export interface InterfaceAlbum {
  picUrl?: string,
  coverImgUrl?: string,
  name?: string,
  singer?: string,
  creator?: any,
  url?: string,
}

export interface InterfaceMusicInfo {
  song?: string,
  singer?: string,
}

export interface InterfaceSinger {
  picUrl?: string,
  name?: string,
  url?: string,
}

export interface InterfaceSong {
  name?: string,
  picUrl?: string,
  popularity?: number,
  index?: number,
  song?: any,
}

export interface InterfaceNavigatorProps {
  text: string,
  url: string,
  component?: any,
}

export interface InterfaceBannerItem {
  pic: string,
  url: string,
}

// some useful api with react common element props like `className`, `style`
export interface InterfaceAlbumProps extends InterfaceAlbum, InterfaceCommonElementProps {}

export interface InterfaceSingerProps extends InterfaceSinger, InterfaceCommonElementProps {}

export interface InterfaceSongProps extends InterfaceSong, InterfaceCommonElementProps {}

export interface InterfaceTitleBar extends InterfaceCommonElementProps {
  text: string,
}

export interface InterfaceBannerItemProps extends InterfaceBannerItem, InterfaceCommonElementProps {}

// data api for config

export interface InterfaceFetchDataConfig {
  method?: string,
  url?: string,
  params?: any,
  data?: any,
}

// actions

export interface InterfacePayload {
  config?: any,
  dataType: string,
  banners?: any[],
  songs?: object,
  singers?: object,
  albums?: object,
  data?: object,
}

export interface InterfaceAction {
  type: string,
  payload: InterfacePayload,
}
