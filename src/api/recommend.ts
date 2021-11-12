import { Banner, Song } from '@/types'
import { ERR_OK, get } from './http'
import { formatList } from '@/client/shared/utils'

/**
 * Get banner list
 * @param limit limit count
 * @param type 0: pc; 1: android; 2: iphone; 3: ipad
 * @default {limit=12}
 * @default {type=1}
 * @returns banner list
 */
export function getBanner(options?: { type: number; limit: number }) {
  const { type = 1, limit = 12 } = options || {}
  return get<{ code: number; banners: Banner[] }>('/banner', {
    params: {
      type,
    },
  })
    .then(value => (value.code === ERR_OK ? value.banners : []))
    .then(list => (list.length <= limit ? list : list.slice(0, limit + 1))) // c
    .then(list => formatList(list, ['bannerId', 'pic', 'targetId']))
    .catch(e => {
      console.error('getBanner: ', e)
      return []
    })
}

/**
 * Get recommend list.
 * @param limit limit count
 * @default {limit=30}
 * @returns recommend list
 */
export function getRecommendList(options?: { limit: number }) {
  const { limit = 30 } = options || {}
  return get<{ code: number; result: Song[] }>('/personalized', {
    params: { limit },
  })
    .then(value => (value.code === ERR_OK ? value.result : []))
    .then(list => (list.length <= limit ? list : list.slice(0, limit + 1))) // c
    .then(value =>
      formatList(value, [
        'copywriter',
        'id',
        'name',
        'picUrl',
        'playCount',
        'type',
      ]),
    )
    .catch(e => {
      console.error('getRecommendList: ', e)
      return []
    })
}
