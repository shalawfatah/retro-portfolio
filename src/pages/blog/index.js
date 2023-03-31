import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import Paper from '../../components/pages/blog/Paper'
import { supabase } from '../../lib/supabase'

const Blog = () => {

  const [blogs, setBlogs] = useState([])
  const fetcher = async() => {
    const {data, error} = await supabase.from('blog').select()
    if(error) console.log(error)
    setBlogs(data)
  }
  useEffect(() => {
    fetcher()
  }, [blogs])

  return (
    <Layout classes="bg-[#CED3DA]">
      <div className='pb-20'>
      {blogs.map(item => {
        return <Paper link={item.link} title={item.title} excerpt={`${item.excerpt} ...`} />
      })}
      </div>
    </Layout>
  )
}

export default Blog

export const Head = () => <title>Blog</title>