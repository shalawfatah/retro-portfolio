import React from 'react'

const Sticky = ({classes, text}) => {
  return (
    <div className={`${classes} 
                the-girl-next-door 
                h-72 w-56 shadow-md shadow-gray-600 
                flex justify-center items-center 
                p-10 text-center text-2xl
                text-[#00366f]
                `}>{text}</div>
  )
}

export default Sticky