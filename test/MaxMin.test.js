import React from 'react'
import { shallow } from 'enzyme'
import jsdomGlobal from 'jsdom-global'
import MaxMin from '../src/'

before(() => {
  global.jsdom = jsdomGlobal()
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
