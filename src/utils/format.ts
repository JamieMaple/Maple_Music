function addZeroPrefix(num: number): string {
  const numToString = '' + num

  return numToString.length === 1 ? `0${numToString}` : numToString
}

export function formatDateNum(date: number = 0, split: string = '-'): string {
  const formatedDate = new Date(date)
  const year = formatedDate.getFullYear()
  const month = addZeroPrefix(formatedDate.getMonth() + 1)
  const day = addZeroPrefix(formatedDate.getDay())

  return [year, month, day].join(split)
}

export function formatMusicTime(time: number, split: string = ':'): string {
  const base = 60 * 1000
  const min = Math.floor(time / base)
  const sec = Math.floor((time / base - min) * 60)

  return [min, sec].join(split)
}
