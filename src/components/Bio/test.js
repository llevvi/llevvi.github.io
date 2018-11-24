import React from 'react'
import Bio from './index'
import { shallow } from 'enzyme'

describe('Bio', () => {
  it('renders as expected', () => {
    const bio = shallow(<Bio name='Leandro' tagline='Test' />)
    expect(bio).toMatchSnapshot()
  })
})