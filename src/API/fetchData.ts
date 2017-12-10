import axios from 'axios'
import { IFetchDataConfig } from 'commonTypes'

export const fetchData = ({
  method = 'GET',
  url,
  params = {},
  data = {},
}: IFetchDataConfig) => {
  if (!url) {
    throw Error('No url for fetch data!')
  }
  return axios.request({
      method,
      url,
      params,
      data,
    }).then(res => res.data)
}
