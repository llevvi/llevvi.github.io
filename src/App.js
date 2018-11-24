import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { SUBSCRIBE_FORM_URL } from './constants'

import Home from './components/Home'
import Footer from './components/Footer'
class App extends Component {
  constructor(props){
    super(props)
    library.add(fab)
  }

  redirectToSubscribeForm = () => {
    return (
      window.location.replace(SUBSCRIBE_FORM_URL)
    )
  } 

  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exect path='/' render={Home} />
          <Route exact path='/lista' render={this.redirectToSubscribeForm} />
          <Footer address='Belo Horizonte - MG, Brazil' />
        </React.Fragment>
      </Router>
    )
  }
}

export default App
