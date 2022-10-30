import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='bottom-container'>
      
      <a href='https://www.facebook.com/' className='f-l'> FaceBook </a>
      <a href='https://www.linkedin.com/' className='f-l'>LinkedIn</a>
      <a href='https://github.com/' className='f-l'>Github</a>
      <p className='currentYear'>© {currentYear} Deal Steals</p>
    </div>
  )
}

export default Footer