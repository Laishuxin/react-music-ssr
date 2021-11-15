import { Context } from '@/types'
export const sizeMap = {
  sm: 4,
  md: 6,
  lg: 8,
  xl: 12,
}
export const isVoid = (v: any) => v == null || v === ''

export const setStyle = (
  context: Context | undefined,
  key: string,
  style: string,
) => {
  if (context) {
    if (!context.css) {
      context.css = new Map()
    }
    if (!context.css.has(key)) {
      context.css.set(key, style)
    }
  }
}

export function formatCount(count: number) {
  if (count < 10000) {
    return count + ''
  } else if (count <= 100000000) {
    return (count / 10000).toFixed(1) + '万'
  } else {
    return (count / 1000000000).toFixed(1) + '亿'
  }
}

export function formatItem<Item>(item: Item, keys: (keyof Item)[]) {
  return keys.reduce((prev, curr) => {
    prev[curr] = item[curr]
    return prev
  }, {} as Item)
}

export function formatList<Item>(list: Item[], keys: (keyof Item)[]) {
  return list.map(item => formatItem(item, keys))
}
