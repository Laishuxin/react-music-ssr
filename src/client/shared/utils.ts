import { Context } from 'types'
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
