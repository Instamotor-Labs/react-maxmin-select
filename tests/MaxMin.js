
import React from 'react'
import TestUtils from 'react-dom/test-utils'
import MaxMin from '../bundle-test'
jest.unmock('../bundle-test')

describe('MaxMin', () => {
  it('renders', () => {
    const rangeSlider = TestUtils.renderIntoDocument(
      <div />
        )
    expect(rangeSlider).toBeDefined()
  })
})
