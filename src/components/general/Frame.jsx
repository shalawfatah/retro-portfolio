import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

// FRAME COMPONENT THAT WRAPS PROJECT ANIMATED PHOTOS

const Frame = ({title, body, picture, classes, link}) => {
  return (
    <div className={`${classes} relative`}>
        <StaticImage src={"../../images/frame.webp"} className="w-80" />
        <Link to={link} style={{backgroundImage: `url(${picture})`, backgroundSize: 'cover'}} className='absolute w-[234px] h-[234px] left-[42px] top-[175px] p-4 flex flex-col justify-end cursor-pointer'>
            <h2 className='font-bold bg-white rounded px-1 my-1 bg-opacity-70'>{title}</h2>
            <p className='bg-white rounded px-1 my-1 bg-opacity-70'>{body}</p>
        </Link>
    </div>
  )
}

export default Frame