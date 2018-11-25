import React from 'react'
import { shallow } from 'enzyme'
import Home from './index'
import ContactBox from '../ContactBox'

describe('Home', () => {
  it('renders home component correctly', () => {
    const home = shallow(<Home />)
    expect(home).toMatchSnapshot()
  })

  it('renders home without the contact box by default', () => {
    const home = shallow(<Home />)
    expect(home.contains(<ContactBox />)).toBe(false)
  })

  it('renders home with the contact button by default', () => {
    const home = shallow(<Home />)
    expect(home.find('#contact-button').length).toBe(1)
  })

  it('shows contact box when the state is updated', () => {
    const home = shallow(<Home />)
    home.setState({
      showContactBox: true
    })
    expect(home.contains(<ContactBox />)).toBe(true)
  })
})