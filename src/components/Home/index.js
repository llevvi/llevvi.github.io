import React from 'react'
import Bio from '../Bio'
import SocialBox from '../SocialBox'

import { SOCIAL_ICONS_AND_LINKS } from '../../constants'

const Home = () => {
  return(
    <React.Fragment>
      <Bio name='Leandro Vicente' tagline='Software Developer and Content Creator' />
      <SocialBox iconsAndLinks={SOCIAL_ICONS_AND_LINKS} />
    </React.Fragment>
  )
}

export default Home