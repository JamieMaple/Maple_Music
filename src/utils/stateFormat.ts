/*
** global state id key prefix
** @param  {number|string} id  format number or string
** @return {string}
*/
export function stateIdPrifex(id: number|string) {
  const idToString = '' + id
  return `id_` + idToString
}

/*
** format double to percentage
** @param  {number}  num  format number 0 ~ 1
** @return {number}  0 ~ 100
*/
export function formatPercentage(num: number): number {
  if ( num <= 1 && num >= 0) {
    return Number((100 * num).toFixed(2))
  } else {
    return num
  }
}
