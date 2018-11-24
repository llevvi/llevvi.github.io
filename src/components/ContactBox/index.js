import React, { Component } from 'react'
import axios from 'axios'
import './index.css'

const GOOGLE_FORM_MESSAGE_ID = 'entry.1249636003'
const GOOGLE_FORM_EMAIL_ID = 'entry.1157005188'
const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLScJX66KS2GUD1Ci-piKoPbsracqXFjJr7kSWd3yAin_vgk7OQ/formResponse'

class ContactBox extends Component {
  constructor(props){
    super(props)
    this.state = { message: '', email: '' }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.sendMessage()
  }

  sendMessage = () => {
    const formData = new FormData()
    formData.append(GOOGLE_FORM_MESSAGE_ID, this.state.message)
    formData.append(GOOGLE_FORM_EMAIL_ID, this.state.email)

    axios.post(GOOGLE_FORM_ACTION,formData)
      .then(() => {
        // eslint-disable-next-line no-console
        console.log('sucesso')
      }).catch(() => {
        // eslint-disable-next-line no-console
        console.log('erro')
      })
  }

  render() {
    return(
      <React.Fragment>
        <div>Say hi!</div>
        <form onSubmit={this.handleSubmit}>
          <div className='form-control'>
            <label htmlFor='email'>
              Email:
            </label>
          </div>
          <div className='form-control'>
            <input 
              type='email' 
              name='email'
              id='email'
              className='form-field'
              value={this.state.email} 
              onChange={this.handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='message'>
              Message:
            </label>
          </div>
          <div className='form-control'>
            <textarea 
              id='message'
              className='form-field'
              name='message'
              value={this.state.message} 
              onChange={this.handleChange} 
            />
          </div>
          <div className='form-control'>
            <input type='submit' id='submit' className='form-field' value='Submit' />
          </div>
        </form>
      </React.Fragment>
    )
  }
}

export default ContactBox