import { Context } from '@/types'
export * from '@/shared/utils'

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
  if (count <= 0) {
    return count + ''
  } else if (count <= 1000000000) {
    return (count / 10000).toFixed(1) + '万'
  } else {
    return (count / 1000000000).toFixed(1) + '亿'
  }
}
