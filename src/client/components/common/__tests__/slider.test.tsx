import React from 'react'
import { render } from '@testing-library/react'
import Slider from '../slider'
describe('slider', () => {
  it('should render the correct slider with default props', () => {
    const { getByTestId } = render(
      <Slider
        data-testid='test-slider'
        dataSource={[
          { key: 1, value: 1 },
          { key: 2, value: 2 },
        ]}
        render={item => <span>{item.value}</span>}
      />,
    )
    const element = getByTestId('test-slider')
    expect(element).toBeInTheDocument()
    expect(element).toMatchSnapshot('snapshot-slider')
  })
})
