/*
** use to add zero if length is 1
** @param   {number|string}  num  which num need to add prefix zero
** @return  {string}
**
*/
function addZeroPrefix(num: number|string): string {
  const numToString = '' + num

  return numToString.length === 1 ? `0${numToString}` : numToString
}

/*
** use to format date num like `1512977669033` (new Date().getTime())
** @param   {number}  date    which num need to transform
** @param   {string}  split   use to join in the last
** @return  {string}
*/

export function formatDateNum(date: number = 0, split: string = '-', ifHideYear: boolean = false): string {
  const formatedDate = new Date(date)
  const year = formatedDate.getFullYear()
  const month = addZeroPrefix(formatedDate.getMonth() + 1)
  const day = addZeroPrefix(formatedDate.getDate())

  if (ifHideYear) {
    return [month, day].join(split)
  } else {
    return [year, month, day].join(split)
  }
}

/*
** use to format date num such for comment time
** @param   {number}  date    which num need to transform
** @param   {string}  split   use to join in the last
** @return  {string}
*/

export function formatComplexDate(date: number = 0, split: string = '-'): string {
  const formatedDate = new Date(date)
  const now = new Date()
  const distanceYears = now.getFullYear() - formatedDate.getFullYear()
  const distanceMonth = now.getMonth() - formatedDate.getMonth()
  const distanceDays = now.getDate() - formatedDate.getDate()
  const distanceHours = now.getHours() - formatedDate.getHours()
  const distanceMin = now.getMinutes() - formatedDate.getMinutes()

  if (distanceYears) {
    return formatDateNum(date, split)
  } else if (distanceMonth || distanceMonth > 7) {
    return formatDateNum(date, split, true)
  } else if (distanceDays !== 0 && distanceDays <= 7) {
    return `${distanceDays}天前`
  } else if (distanceHours >= 1) {
    return `${distanceHours}小时以前`
  } else if (distanceMin >= 1) {
    return `${distanceMin}分钟以前`
  } else {
    return '刚刚'
  }
}

/*
** use to format music time
** @param   {number}  time    which num need to transform
** @param   {string}  split   use to join in the last
** @return  {string}
*/

export function formatMusicTime(time: number, split: string = ':'): string {
  const base = 60 * 1000
  const min = Math.floor(time / base)
  const sec = addZeroPrefix(Math.floor((time / base - min) * 60))

  return [min, sec].join(split)
}
