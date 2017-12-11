import { IStateTree } from 'commonTypes'

export const selectors = {
  getDetails: (state: IStateTree) => state.details || {},
  getComments: (state: IStateTree) => state.comments || {},
}
