import React from 'react'

import { SUBSCRIBE_FORM_URL } from '../../constants'

const redirectToSubscribeForm = () => {
  return (
    window.location.replace(SUBSCRIBE_FORM_URL)
  )
} 

const YouTubeList = () => {
  return(
    <React.Fragment>
      <h1>Loading...</h1>
      { redirectToSubscribeForm() }
    </React.Fragment>
  )
}

export default YouTubeList