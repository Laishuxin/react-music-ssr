import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import HorizontalList, { HorizontalListProps } from '../horizontal-list'

describe('horizontal-list', () => {
  const fn = jest.fn()
  const props: HorizontalListProps<{ name: string }> = {
    list: [{ name: '0' }, { name: '1' }, { name: '2' }],
    onChange: fn,
  }

  beforeEach(() => {
    fn.mockClear()
  })
  it('should render the correct horizontal list', () => {
    const { getByTestId } = screen
    render(<HorizontalList data-testid='test-horizontal-list' {...props} />)
    const element = getByTestId('test-horizontal-list')
    expect(element).toMatchSnapshot()
  })

  it('should perform the correct onChange event', () => {
    const { getByTestId, getByText } = render(
      <HorizontalList data-testid='test-horizontal-list-2' {...props} />,
    )
    const element = getByTestId('test-horizontal-list-2')
    expect(element).toBeInTheDocument()
    const items = element.querySelectorAll('.horizontal-list-item')
    expect(items.length).toBe(props.list.length)

    expect(items[0]).toHaveClass('active')
    fireEvent.click(items[0])
    expect(fn).not.toHaveBeenCalled()

    const targetElement = getByText('2')
    expect(targetElement).toBeInTheDocument()
    fireEvent.click(targetElement)
    waitFor(() => {
      expect(targetElement).toHaveClass('active')
      expect(fn).toHaveBeenCalledWith(2)
    })
  })
})
