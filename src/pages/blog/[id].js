import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout';
import { supabase } from '../../lib/supabase';
import { StaticImage } from 'gatsby-plugin-image'

const SingleArticle = (props) => {
  const id = props.params.id;
  const [blog, setBlog] = useState({})
  const fetcher = async() => {
    const {data, error} = await supabase.from('blog').select().eq('id', id).single()
    if(error) console.log(error)
    setBlog(data)
  }
  useEffect(() => {
    fetcher()
  }, [])
  console.log('b ', blog.picture)
  return (
    <Layout>
      <div className='container leading-10'>
      <h2 className='text-3xl font-bold underline'>{blog.title}</h2>
      <div style={{backgroundImage: `url(${blog.picture})`, backgroundSize: 'cover'}} className='my-8 w-full h-96 rounded-lg shadow-xl shadow-gray-700' />
      <p>{blog.content}</p>
      </div>
    </Layout>
  )
}

export default SingleArticle