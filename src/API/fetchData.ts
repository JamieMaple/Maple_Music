import axios from 'axios'
import { IFetchDataConfig } from 'commonTypes'

const timeoutDefault = 1000

export const fetchData = ({
  method = 'GET',
  url,
  params = {},
  timeout = timeoutDefault,
  // data = {},
}: IFetchDataConfig) => {
  if (!url) {
    throw Error('No url for fetch data!')
  }
  return axios.request({
      method,
      url,
      params,
      timeout,
      // data,
    }).then(res => res.data)
}
