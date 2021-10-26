import http from './http'

export function getMusic() {
  return http.get('/music')
}
