import React from 'react'
import { shallow } from 'enzyme'
import ContactBox from '.'

describe('Contact Box', () => {
  it('Renders correctly', () => {
    const contactBox = shallow(<ContactBox />)
    expect(contactBox).toMatchSnapshot()
  })
})