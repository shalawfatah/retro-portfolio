import React from 'react'
import Navbar from './Navbar'

const Layout = ({children, classes}) => {
  return (
    <div className={`${classes}`}>
        <Navbar />
        <div className='container mx-auto'>
          {children}
        </div>
    </div>
  )
}

export default Layout