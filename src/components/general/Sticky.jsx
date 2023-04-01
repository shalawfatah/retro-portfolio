import React from 'react'
import { motion } from "framer-motion";

const Sticky = ({classes, text, image}) => {
  return (
    <motion.div drag className={`${classes} 
                the-girl-next-door cursor-grabbing
                h-72 w-56 shadow-md shadow-gray-600 
                flex justify-center items-center flex-col
                text-center text-2xl
                py-20 px-4
                text-[#00366f]
                `}><p>{text}</p>{image}
    </motion.div>
  )
}

export default Sticky