import { IStateTree } from 'commonTypes'

export const selectors = {
  getDetails: (state: IStateTree) => state.details || {},
  getComments: (state: IStateTree) => state.comments || {},
  getLists: (state: IStateTree) => state.lists || {},
  getListening: (state: IStateTree) => state.listening || {},
  getIfPlaying: (state: IStateTree) => state.listening ? state.listening.isPlaying : false,
  getSong: (state: IStateTree) => state.songs || {},
}
