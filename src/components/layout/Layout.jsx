import React from 'react'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <div className='bg-[#CED3DA]'>
        <Navbar />
        <div className='container mx-auto'>
          {children}
        </div>
    </div>
  )
}

export default Layout