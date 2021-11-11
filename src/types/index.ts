import { StaticContext } from 'react-router'

export interface Context extends StaticContext {
  css: Map<string, string>
}

export interface RecommendItem {
  id: number
  picUrl: string
  playCount: number
  name: string
}
