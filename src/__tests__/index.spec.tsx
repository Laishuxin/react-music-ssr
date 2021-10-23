import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Header from '../client/components/header'
describe('should render correct component', () => {
  it('test...', () => {
    expect(1 + 1).toBe(2)
  })
  it('test component', () => {
    const { getByText } = render(<Header data-testid='header' />)
    const element = getByText('header')
    expect(element).toBeInTheDocument()
  })
})
