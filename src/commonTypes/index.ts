export interface InterfaceCommonElementProps {
  className?: string,
  style?: object,
}

export interface InterfaceAlbum {
  image?: string,
  name?: string,
  singer?: string,
  url?: string,
}

export interface InterfaceMusicInfo {
  song?: string,
  singer?: string,
}

export interface InterfaceSinger {
  image?: string,
  name?: string,
  url?: string,
}

export interface InterfaceSong {
  name?: string,
  picUrl?: string,
  count?: number,
  index?: number,
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
  method: string,
  params?: any,
  data?: any,
}

// actions

export interface InterfacePayload {
  banners?: any[],
  songs?: any[],
  singers?: any[],
  albums?: any[],
}

export interface InterfaceAction {
  type: string,
  payload: InterfacePayload,
}
