import React from 'react'
import { useStaticQuery } from 'gatsby';
import Button from '../../components/layout/Button'
import Layout from '../../components/layout/Layout'
import { graphql } from 'gatsby'

const SingleProject = (params) => {
  const data = useStaticQuery(graphql`
    query projectQuery {
      allSupabaseProject {
        nodes {
          id
          title
          techstack
          picture
          content
          github
          live
        }
      }
    }
  `);
  const project = data.allSupabaseProject.nodes.find(item => item.id === params.params.id)
    const githubLink = () => {
        window.location.href = `${project.github}`;
    }
    const liveLink = () => {
        window.location.href = `${project.live}`;
    }

    return (
    <Layout>
        <div className='flex justify-center items-center flex-col '>
            <h2 className='text-3xl underline'>{project.title}</h2>
            <div className='flex gap-x-2 my-4'>
            <p className='font-bold'>Tech Stack:</p>
            {project.techstack?.map((item, index) => <p key={index} className='bg-gray-200 rounded px-4 py-1 text-xs'>{item}</p>)}
            </div>
            <div className='my-4 text-center'>
            <p className='text-xl underline my-2'>Description:</p>
            <p className='text-gray-600'>{project.content}</p>
            </div>
            <h2 className='text-xl underline '>For review</h2>
            <div className='flex flex-row gap-x-4'>
            <Button pin={false} text="Code on Github" onClick={githubLink} />
            <Button pin={false} text="Project Live" onClick={liveLink} />
            </div>
        </div>
    </Layout>
  )
}

export default SingleProject