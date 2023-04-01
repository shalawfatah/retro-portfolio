import React from 'react'
import Navbar from './Navbar'

// LAYOUT WHICH INCLUDES NAVBAR 

const Layout = ({children, classes}) => {
  return (
    <div className={`${classes} changa`}>
        <Navbar />
        <div className='container mx-auto '>
          {children}
        </div>
    </div>
  )
}

export default Layout