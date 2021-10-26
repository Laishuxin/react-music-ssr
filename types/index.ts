import { StaticContext } from 'react-router'

export interface Context extends StaticContext {
  css: Map<string, string>
}
