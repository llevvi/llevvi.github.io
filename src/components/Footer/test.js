import React from 'react'
import Footer from './index.js'
import { shallow } from 'enzyme'

describe('Footer', () => {
  it('renders as expected', () => {
    const footer = shallow(<Footer address='BH, Brasil' />)
    expect(footer).toMatchSnapshot()
  })
})