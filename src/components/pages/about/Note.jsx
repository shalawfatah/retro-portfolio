import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

// NOTE ON ABOUT PAGE

const Note = ({title, body}) => {
  return (
    <div className='flex justify-center relative my-6 min-h-screen the-girl-next-door'>
        <StaticImage src={'../../../images/note.png'} className="max-h-[1000px]" />
        <div  className='absolute p-2 lg:p-10 flex flex-col top-24 '>
            <h2 className='ml-10 font-bold px-1 my-1 text-2xl'>{title}</h2>
            <div className='px-1 ml-10 my-1 text-gray-500 max-w-[400px]  text-md' dangerouslySetInnerHTML={{__html: body}}></div>
        </div>
    </div>
  )
}

export default Note