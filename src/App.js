import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Bio from './components/Bio'
import SocialBox from './components/SocialBox'
import { SOCIAL_ICONS_AND_LINKS } from './constants'

class App extends Component {
  constructor(props){
    super(props)
    library.add(fab)
  }
  render() {
    return (
      <React.Fragment>
        <Bio name='Leandro Vicente' tagline='Software Developer and Content Creator' />
        <SocialBox iconsAndLinks={SOCIAL_ICONS_AND_LINKS} />
      </React.Fragment>
    )
  }
}

export default App;
