import React from 'react'
import Pin from './Pin';

// BUTTON USED IN NAVBAR AND PROJECTS

const Button = ({text, onClick, pin}) => {
  return (
    <div onClick={onClick} className='relative flex cursor-pointer'>
        <div className={`${pin === true ? 'underline' : null} m-2 text-center px-10 py-2 ml-[4px] mt-[4px]`}>{text}</div>
    </div>
  )
}

export default Button