import { formatCount, formatItem, formatList } from '../utils'

describe('utils', () => {
  it('formatCount', () => {
    expect(formatCount(-100)).toBe('-100')
    expect(formatCount(100)).toBe('100')
    expect(formatCount(10000)).toBe('1.0万')
    expect(formatCount(11000)).toBe('1.1万')
    expect(formatCount(1000000000)).toBe('1.0亿')
  })

  it('formatItem', () => {
    expect(formatItem({ a: '1', b: '2', c: 3 }, ['a', 'b'])).toEqual({
      a: '1',
      b: '2',
    })
  })

  it('formatList', () => {
    expect(
      formatList(
        [
          { a: '1', b: '2' },
          { a: 2, b: '3', c: 1 },
        ],
        ['a', 'b'],
      ),
    ).toEqual([
      { a: '1', b: '2' },
      { a: 2, b: '3' },
    ])
  })
})
