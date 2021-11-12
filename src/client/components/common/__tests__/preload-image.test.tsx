import React from 'react'
import { render } from '@testing-library/react'
import PreloadImage from '../preload-image'
import nock from 'nock'
import axios from 'axios'
jest.mock('axios')

const MOCK_URL = 'http://localhost:5000/test'
const preloadSrc = MOCK_URL + '/preload-image'
const src = MOCK_URL + '/image'

const helper = () => {
  return axios.get(src)
}

describe('PreloadImage', () => {
  it('should show the preload image when target image is fetching', async () => {
    const scope = nock(MOCK_URL).get('/preload-image')
    nock(MOCK_URL).get('/placeholder').reply(200)

    const { getByTestId } = render(
      <PreloadImage
        data-testid='test-preload-image'
        preloadSrc={preloadSrc}
        src={src}
      />,
    )
    const element = getByTestId('test-preload-image')
    expect(element).toHaveAttribute('src', preloadSrc)
  })
})
