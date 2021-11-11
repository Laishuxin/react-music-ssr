import { formatCount } from '../utils'

describe('utils', () => {
  it('formatCount', () => {
    expect(formatCount(-100)).toBe('-100')
    expect(formatCount(100)).toBe('100')
    expect(formatCount(10000)).toBe('1.0万')
    expect(formatCount(11000)).toBe('1.1万')
    expect(formatCount(1000000000)).toBe('1.0亿')
  })
})
