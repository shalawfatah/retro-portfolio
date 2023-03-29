import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Frame = ({title, body, picture, classes}) => {
  return (
    <div className={`${classes} relative`}>
        <StaticImage src={"../../images/frame.webp"} className="w-80" />
        <div style={{backgroundImage: `url(${picture})`, backgroundSize: 'cover'}} className='absolute w-[234px] h-[234px] left-[42px] top-[175px] p-4 flex flex-col justify-end'>
            <h2 className='font-bold bg-white rounded px-1 my-1 bg-opacity-70'>{title}</h2>
            <p className='bg-white rounded px-1 my-1 bg-opacity-70'>{body}</p>
        </div>
    </div>
  )
}

export default Frame