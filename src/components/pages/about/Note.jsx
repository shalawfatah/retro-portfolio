import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Note = ({title, body}) => {
  return (
    <div className='flex justify-center relative my-6'>
        <StaticImage src={'../../../images/note.png'} className="" />
        <div  className='absolute p-4 flex flex-col top-24'>
            <h2 className='font-bold px-1 my-1 text-2xl'>{title}</h2>
            <p className='px-1 my-1 text-gray-500'>{body}</p>
        </div>
    </div>
  )
}

export default Note