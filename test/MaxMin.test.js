import React from 'react'
import { shallow } from 'enzyme'
import globalJsdom from 'global-jsdom'
import MaxMin from '../src'

before(() => {
  global.jsdom = globalJsdom()
})

after(() => {
  global.jsdom()
})

describe('MaxMin', () => {
  xit('works', () => {
    const component = shallow(<MaxMin />)
    expect(component).to.have.type(MaxMin)
  })
})
