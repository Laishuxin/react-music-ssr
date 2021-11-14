import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Capsule from '../capsule'

describe('capsule', () => {
  const fn = jest.fn()
  it('should render the correct capsule', () => {
    const { getByTestId } = render(
      <Capsule data-testid='test-capsule' text='test' />,
    )
    const { getByTestId: getByTestId2 } = render(
      <Capsule
        onClick={fn}
        data-testid='test-capsule2'
        tagName='button'
        text='test'
      />,
    )
    const element = getByTestId('test-capsule')
    const element2 = getByTestId2('test-capsule2')
    expect(element).toMatchSnapshot('capsule-default')

    expect(element2.tagName.toUpperCase()).toBe('BUTTON')
    expect(element2).toMatchSnapshot()

    fireEvent.click(element2)
    expect(fn).toHaveBeenCalled()
  })
})
