import React, { useEffect, useState } from 'react'
import Frame from '../../components/general/Frame'
import Layout from '../../components/layout/Layout'
import { supabase } from '../../lib/supabase';

const Projects = () => {

  const [projects, setProjects] = useState([])
  const fetcher = async() => {
    const {data, error} = await supabase.from('projects').select().eq('featured', true)
    if(error) console.log(error)
    setProjects(data)
  }
  useEffect(() => {
    fetcher()
  }, [])

  return (
    <Layout classes="bg-[#CED3DA]">
      <div className='flex gap-x-20 flex-wrap justify-center mx-20 pb-20'>
      {projects.map((item, index) => {
        return <Frame link={item.id} classes={`${index % 2 === 0 ? 'lg:mt-20' : ''} my-4`} title={item.title} body={item.techstack} picture={item.picture} />
      })}
      </div>
    </Layout>
  )
}

export default Projects

export const Head = () => <title>Projects</title>