import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Paper = ({title, excerpt, link}) => {
  return (
    <a target="_blank" href={link} className='flex justify-center relative my-6 cursor-pointer'>
        <StaticImage src={'../../../images/paper-torn.png'} className="" />
        <div className='absolute p-4 max-w-[500px]'>
            <h2 className='font-bold px-1 my-1 underline text-xl mt-2 text-[#000F55]'>{title}</h2>
            <p className='px-1 my-1 text-gray-500'>{excerpt}</p>
        </div>
    </a>
  )
}

export default Paper