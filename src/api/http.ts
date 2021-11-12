import { BaseRequest } from '@/types'
import axios, { AxiosRequestConfig } from 'axios'
import qs from 'qs'

const CLIENT_BASE_URL = 'http://localhost:7890/api'
const API_BASE_URL = 'http://localhost:7891'
const ERR_OK = 200

// @ts-ignore
const BASE_URL = import.meta.env.SSR ? API_BASE_URL : CLIENT_BASE_URL

const instance = axios.create({
  baseURL: BASE_URL,
  transformRequest: (data: any) => qs.stringify(data),
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
})

// instance.interceptors.request.use(config => {
//   const token = localStorage.getItem('token')
//   return config
// })
instance.interceptors.response.use(response => response.data)

function get<D extends BaseRequest = any>(
  endpoint: string,
  config?: AxiosRequestConfig,
) {
  return instance.get(endpoint, config) as Promise<D>
}

function post<D extends BaseRequest = any>(
  endpoint: string,
  config?: {
    data?: object
  } & AxiosRequestConfig<object>,
) {
  const { data, ...restConfig } = config || {}
  return instance.post(endpoint, data, restConfig) as Promise<D>
}

export default instance
export { get, post, ERR_OK }
