import React from 'react'
import PropTypes from 'prop-types'

const Bio = (props) => {
  return (
    <React.Fragment>
      <h1>{props.name}</h1>
      <h2>{props.tagline}</h2>
    </React.Fragment>
  )
}

Bio.propTypes = {
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired
}

export default Bio