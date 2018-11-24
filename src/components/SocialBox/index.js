import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'


const SocialMediaBox = (props) => {
  const { iconsAndLinks } = props
  return (
    <ul className="social-media-list">
      {
        iconsAndLinks.map( (social_network, key) => 
          <li key={key}> 
            <a 
              href={social_network.url} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`${social_network.name} link`}>
              <FontAwesomeIcon icon={['fab', social_network.name]} size='2x' />
            </a> 
          </li>
        )
      }
    </ul>
  )
}

SocialMediaBox.propTypes = {
  iconsAndLinks: PropTypes.string.isRequired
}

export default SocialMediaBox