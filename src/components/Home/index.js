import React, {Component} from 'react'
import Bio from '../Bio'
import SocialBox from '../SocialBox'
import Footer from '../Footer'
import ContactBox from '../ContactBox'

import './index.css'

import { SOCIAL_ICONS_AND_LINKS, AVATAR_URL } from '../../constants'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      showContactBox: false
    }
  }

  handleClick = () => {
    this.setState({
      showContactBox: true
    })
  }
  render() {
    return(
      <React.Fragment>
        <Bio name='Leandro Vicente' tagline='Software Developer and Content Creator' />
        <img src={AVATAR_URL} alt={'Leandro profile'} className='avatar' />
        <SocialBox iconsAndLinks={SOCIAL_ICONS_AND_LINKS} />
        {
          this.state.showContactBox 
            ? 
            <ContactBox /> 
            :
            <button id='contact-button' className='btn btn-sm' onClick={this.handleClick}>Contact</button>
        }
        <Footer address='Belo Horizonte - MG, Brazil' />
      </React.Fragment>
    )
  }
}

export default Home