import React from 'react'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <div className='bg-[#CED3DA]'>
        <Navbar />
        {children}
    </div>
  )
}

export default Layout