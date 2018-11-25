import React from 'react'
import { shallow } from 'enzyme'
import moxios from 'moxios'
import ContactBox from '.'

describe('Contact Box', () => {
  let contactBox

  beforeEach(() => {
    contactBox = shallow(<ContactBox />)
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
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

  it('shows loading message after submitting form', () => {
    contactBox.setState({showForm: true})
    contactBox.find('form').simulate('submit', {
      preventDefault: jest.fn()
    })

    expect(contactBox.text()).toBe('Sending...')
  })

  it('shows success message and contact button if the message is sent successfully', () => {
    contactBox.setState({messageSent: true})

    expect(contactBox.find('.success-message').length).toBe(1)
    expect(contactBox.find('#return-button').length).toBe(1)
  })

  it('displays contact button when the return button is clicked', () => {
    contactBox.setState({messageSent: true})
    contactBox.find('#return-button').simulate('click')

    expect(contactBox.find('#contact-button').length).toBe(1)
  })

  it('displays error message and return button when message is not sent', () => {
    contactBox.setState({messageError: true})

    expect(contactBox.find('.error-message').length).toBe(1)
    expect(contactBox.find('#return-button').length).toBe(1)
  })
})