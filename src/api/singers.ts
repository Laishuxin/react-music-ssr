import { formatList, isVoid } from '@/client/shared/utils'
import { Page, Singer } from '@/types'
import { categoryMap } from '.'
import { get } from './http'

const ERR_OK = 200
interface GetSingerRequestOptions extends Page {
  category?: string
  alpha?: string
}

const DEFAULT_OPTIONS: GetSingerRequestOptions = {
  limit: 30,
  offset: 0,
}

type Options = Partial<GetSingerRequestOptions>
export function getSingerList(options: Options = {}) {
  let endpoint: string
  const category = options.category
  if (isVoid(category)) {
    endpoint = '/top/artists'
  } else {
    endpoint = '/artist/list'
    const { type, area } = categoryMap.get(category!) || { type: -1, area: -1 }
    options = {
      ...DEFAULT_OPTIONS,
      type,
      area,
      initial: options.alpha,
      limit: options.limit,
      offset: options.offset,
    } as any
  }

  return get<{ code: number; artists: Singer[]; more: boolean }>(endpoint, {
    params: options,
  })
    .then(value => (value.code === ERR_OK ? value.artists : []))
    .then(list => formatList(list, ['accountId', 'id', 'name', 'picUrl']))
    .catch(e => {
      console.log('getSingers: ', e)
      return [] as Singer[]
    })
}
