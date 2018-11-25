import React from 'react'
import { shallow } from 'enzyme'
import Home from './index'

describe('Home', () => {
  it('renders home component correctly', () => {
    const home = shallow(<Home />)
    expect(home).toMatchSnapshot()
  })
})