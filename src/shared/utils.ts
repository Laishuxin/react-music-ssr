import { StaticContext } from 'react-router'

export const navigateToOrigin = () => {
  window.location.href = '/'
}

export const once = <Fn extends (...args: any[]) => any>(fn: Fn) => {
  let isCalled = false
  return function (this: ThisParameterType<Fn>, ...args: Parameters<Fn>) {
    if (isCalled) {
      return
    }
    isCalled = true
    return fn.apply(this, args)
  }
}
