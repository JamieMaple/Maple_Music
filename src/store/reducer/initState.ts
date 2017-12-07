import { IStateTree, stateTreeTypes } from '../../commonTypes'
function getSubStateObjectFromTypes(subStateTypes: object): object {
  const subStateObj = {}
  for (const key in subStateTypes) {
    if (subStateTypes.hasOwnProperty(key)) {
      subStateObj[subStateTypes[key]] = []
    }
  }

  return subStateObj
}

const { listening, search, songs, albums, singers, lists } = (() => {
  const tempObject: IStateTree = {}
  for (const key in stateTreeTypes) {
    if (stateTreeTypes.hasOwnProperty(key)) {
      if (stateTreeTypes[key] != null && typeof stateTreeTypes[key] === "object") {
        tempObject[key] = getSubStateObjectFromTypes(stateTreeTypes[key])
      }
    }
  }
  return tempObject
})()

export default {
  banners: [],
  listening,
  search,
  songs,
  albums,
  lists,
  singers,
}
