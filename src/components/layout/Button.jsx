import React from 'react'
import pin from '../../../public/static/pin.svg';
import Pin from './Pin';

const Button = ({text, onClick, pin}) => {
  return (
    <div onClick={onClick} className='relative flex cursor-pointer'>
        {pin === true ? (<div className='absolute right-0 -top-6 z-[2000]'>
            <Pin />
        </div>) : <p></p>}
        <div className='bg-[#000] m-2 text-center px-10 py-2 ml-[4px] mt-[4px]'>{text}</div>
        <div className='bg-[#FFC700] m-2 text-center px-8 py-1 absolute'>{text}</div>
    </div>
  )
}

export default Button