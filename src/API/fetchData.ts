import axios from 'axios'
import { InterfaceFetchDataConfig } from 'commonTypes'

export const fetchData = ({
  method = 'GET',
  url = '',
  params = {},
  data = {},
}: InterfaceFetchDataConfig) =>
  axios
    .request({
      method,
      url,
      params,
      data,
    })
    .then(res => res.data)
