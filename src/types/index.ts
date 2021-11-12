import { StaticContext } from 'react-router'
export * from './recommend'
export * from './common'

export interface Context extends StaticContext {
  css: Map<string, string>
}

export interface BaseRequest {
  code: number
}
