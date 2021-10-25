import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { Button, LinkButton } from '../button'

describe('should render correct button components', () => {
  it('render default button', () => {
    const fn = jest.fn()
    const { getByText } = render(<Button onClick={fn}>default-button</Button>)
    const element = getByText('default-button')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn', 'btn-default')
    fireEvent.click(element)
    expect(fn).toBeCalledTimes(1)
  })

  it('render link button', () => {
    const fn = jest.fn()
    const { getByText } = render(
      <LinkButton onClick={fn}>link-button</LinkButton>,
    )
    const element = getByText('link-button')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn', 'btn-link')
    fireEvent.click(element)
    expect(fn).toBeCalledTimes(1)
  })
})
