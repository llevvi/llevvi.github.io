import React, {Component} from 'react'
import Bio from '../Bio'
import SocialBox from '../SocialBox'
import Footer from '../Footer'
import ContactBox from '../ContactBox'

import { SOCIAL_ICONS_AND_LINKS } from '../../constants'

class Home extends Component {
  render() {
    return(
      <React.Fragment>
        <Bio name='Leandro Vicente' tagline='Software Developer and Content Creator' />
        <SocialBox iconsAndLinks={SOCIAL_ICONS_AND_LINKS} />
        <ContactBox /> 
        <Footer address='Belo Horizonte - MG, Brazil' />
      </React.Fragment>
    )
  }
}

export default Home