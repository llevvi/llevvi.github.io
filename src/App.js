import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Bio from './components/Bio'
import SocialBox from './components/SocialBox'
import Footer from './components/Footer'

import { SOCIAL_ICONS_AND_LINKS, SUBSCRIBE_FORM_URL } from './constants'

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
          <Route exact path='/lista' render={this.redirectToSubscribeForm} />
          <Bio name='Leandro Vicente' tagline='Software Developer and Content Creator' />
          <SocialBox iconsAndLinks={SOCIAL_ICONS_AND_LINKS} />
          <Footer address='Belo Horizonte - MG, Brazil' />
        </React.Fragment>
      </Router>
    )
  }
}

export default App
