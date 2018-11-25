import React from 'react'
import { shallow } from 'enzyme'
import ContactBox from '.'

describe('Contact Box', () => {
  let contactBox

  beforeEach(() => {
    contactBox = shallow(<ContactBox />)
  })

  it('Renders correctly', () => {
    expect(contactBox).toMatchSnapshot()
  })

  it('renders with the form hidden by default', () => {
    expect(contactBox.find('form').length).toBe(0)
  })

  it('renders with the contact button by default', () => {
    expect(contactBox.find('#contact-button').length).toBe(1)
  })

  it('shows form when the contact button is clicked ', () => {
    contactBox.find('#contact-button').simulate('click')

    expect(contactBox.find('form').length).toBe(1)
  })

  it('hides form when the cancel button is clicked', () => {
    contactBox.setState({showForm: true})
    contactBox.find('#cancel-button').simulate('click')

    expect(contactBox.find('form').length).toBe(0)
  })

  it('shows contact button when the cancel button is clicked', () => {
    contactBox.setState({showForm: true})
    contactBox.find('#cancel-button').simulate('click')

    expect(contactBox.find('#contact-button').length).toBe(1)
  })
})