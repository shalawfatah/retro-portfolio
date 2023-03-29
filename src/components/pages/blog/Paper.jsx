import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const Paper = ({title, body}) => {
  return (
    <div className='flex justify-center relative my-6'>
        <StaticImage src={'../../../images/paper-torn.png'} className="" />
        <div className='absolute p-4'>
            <h2 className='font-bold px-1 my-1 underline text-xl mt-2 text-[#000F55]'>{title}</h2>
            <p className='px-1 my-1 text-gray-500'>{body}</p>
        </div>
    </div>
  )
}

export default Paper