import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

import { AVATAR_URL } from '../../constants'

const Bio = (props) => {
  return (
    <div className='bio'>
      <h1>{props.name}</h1>
      <h2>{props.tagline}</h2>
      <img src={AVATAR_URL} alt={'Leandro profile'} className='avatar' />
    </div>
  )
}

Bio.propTypes = {
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired
}

export default Bio