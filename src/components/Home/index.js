import React from 'react'
import Bio from '../Bio'
import SocialBox from '../SocialBox'
import Footer from '../Footer'

import { SOCIAL_ICONS_AND_LINKS } from '../../constants'

const Home = () => {
  return(
    <React.Fragment>
      <Bio name='Leandro Vicente' tagline='Software Developer and Content Creator' />
      <SocialBox iconsAndLinks={SOCIAL_ICONS_AND_LINKS} />
      <Footer address='Belo Horizonte - MG, Brazil' />
    </React.Fragment>
  )
}

export default Home