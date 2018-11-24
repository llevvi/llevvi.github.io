import React from 'react'

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

export default Footer