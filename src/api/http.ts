import axios, { AxiosInstance } from 'axios'
import qs from 'querystring'

const CLIENT_BASE_URL = 'http://localhost:7890/api'
const API_BASE_URL = 'http://localhost:7891'

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

export default instance
