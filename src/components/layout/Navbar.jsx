import React, {useEffect, useState} from 'react'
import Button from './Button'
import { navigate } from "gatsby"

const nav_items = [
    {id:1, text: "Home", path: '/'},
    {id:2, text: "Projects", path: '/projects'},
    {id:3, text: "Blog", path: '/blog'},
    {id:4, text: "About Me", path: '/about'},
]
const Navbar = () => {
    const [id, setId] = useState(1)
    const handleClick =  (item) => {
        // use Redux Toolkit to get rid of this glitch
        navigate(item.path)
    }
    useEffect(() => {
        document.URL.includes('blog') && setId(3)
        document.URL.includes('projects') && setId(2)
        document.URL.includes('about') && setId(4)
    }, [id])
    
  return (
    <div className='flex justify-center py-8'>
        {nav_items.map(item => {
            return <div key={item.id}><Button text={item.text} onClick={() => handleClick(item)} pin={item.id === id ? true : false} /></div>
        })}
    </div>
  )
}

export default Navbar