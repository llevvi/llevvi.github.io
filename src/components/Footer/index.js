import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const Footer = (props) => {
  const { address } = props
  return(
    <React.Fragment>
      <footer>
        <div className='border'></div>
        <address>
          {address}
        </address>
      </footer>
    </React.Fragment>
  )
}

Footer.propTypes = {
  address: PropTypes.string.isRequired
}

export default Footer