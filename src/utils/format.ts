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
  if (typeof date !== 'number') {
    return date
  }
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
  if (typeof date !== 'number') {
    return date
  }
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
** use to format play count
** @parma   {number}  time  which num need to format
** @return  {string}
*/

export function formatPlayCount(time: number): string {
  if (typeof time !== 'number') {
    return time
  }
  const timeTmpl = time.toString()
  const hundredThousand = 4
  const hundredMillion = 8
  if (timeTmpl.length <= hundredThousand + 1) {
    // 10 w below
    return timeTmpl
  } else if (timeTmpl.length <= hundredMillion) {
    // 1 y below
    return timeTmpl.slice(0, timeTmpl.length - hundredThousand) + '万'
  } else {
    return timeTmpl.slice(0, timeTmpl.length - hundredMillion) + '亿'
  }
}

/*
** use to format music time
** @param   {number|string}  time    which num need to transform
** @param   {string}         split   use to join in the last
** @return  {string}
*/

export function formatMusicTime(time: number|string, split: string = ':'): string {
  if (typeof time !== 'number') {
    return time
  }
  const base = 60 * 1000
  const min = Math.floor(time / base)
  const sec = Math.round((time / base - min) * 60)

  const minTmpl = addZeroPrefix(min)
  const secTmpl = addZeroPrefix(sec)

  return [minTmpl, secTmpl].join(split)
}
