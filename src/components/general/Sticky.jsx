import React from 'react'

const Sticky = ({classes, text}) => {
  return (
    <div className={`${classes} h-72 w-56 shadow-md shadow-gray-600 flex justify-center items-center`}>{text}</div>
  )
}

export default Sticky