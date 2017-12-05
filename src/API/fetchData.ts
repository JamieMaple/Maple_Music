import axios from 'axios'
import { InterfaceFetchDataConfig } from 'commonTypes'

export const fetchData = (config: InterfaceFetchDataConfig) => axios.request(config).then(res => res.data)
