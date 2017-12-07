import axios from 'axios'
import { IFetchDataConfig } from 'commonTypes'

export const fetchData = ({
  method = 'GET',
  url = '',
  params = {},
  data = {},
}: IFetchDataConfig) =>
  axios
    .request({
      method,
      url,
      params,
      data,
    })
    .then(res => res.data)
