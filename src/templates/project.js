import React from 'react'
import Button from '../components/layout/Button'
import Layout from '../components/layout/Layout';
import { graphql } from 'gatsby'

// SINGLE PROJECT PAGE 


const SingleProject = ({data}) => {

    const project = data.supabaseProject;
    const githubLink = () => {
        window.location.href = `${project?.github}`;
    }
    const liveLink = () => {
        window.location.href = `${project?.live}`;
    }

    return (
    <Layout>
        <div className='flex justify-center items-center flex-col'>
            <h2 className='text-3xl underline'>{project?.title}</h2>
            <div className='flex items-center gap-x-2 my-4'>
            <p className='font-bold'>Tech Stack: &nbsp;</p>
            {project?.techstack?.map((item, index) => <p key={index} className='rounded px-4 py-1 text-xs'>&nbsp;{item} {index < project?.techstack.length - 1 && '|'}</p>)}
            </div>
            <div className='my-4'>
            <p className='text-xl underline my-2'>Description:</p>
            </div>
            <div className='text-gray-600 text-left mb-12' style={{lineHeight: '40px'}} dangerouslySetInnerHTML={{__html: project.content}}></div>
            <h2 className='text-xl underline '>For review</h2>
            <div className='flex flex-row gap-x-4'>
            <Button pin={false} text="Code on Github" onClick={githubLink} />
            <Button pin={false} text="Project Live" onClick={liveLink} />
            </div>
        </div>
    </Layout>
  )
}
export const query = graphql`
  query ProjectById($projectId: String!) {
    supabaseProject(id: {eq: $projectId}) {
      live
      picture
      techstack
      title
      content
      id
      github
      featured
    }
  }
`

export default SingleProject

export const Head = () => <title>Single Project Page</title>