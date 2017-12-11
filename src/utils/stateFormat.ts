/*
** global state id key prefix
** @param  {number|string} id  format number or string
** @return {string}
*/
export function stateIdPrifex(id: number|string) {
  const idToString = '' + id
  return `id_` + idToString
}
