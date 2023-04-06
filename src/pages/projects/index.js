import React from 'react'
import { useStaticQuery } from 'gatsby';
import Frame from '../../components/general/Frame'
import Layout from '../../components/layout/Layout'
import { graphql } from 'gatsby'

// PROJECTS PAGE 

const Projects = () => {

  const data = useStaticQuery(graphql`
    query projectQuery {
      allSupabaseProject(sort: {title: DESC}) {
        nodes {
          id
          title
          techstack
          picture
        }
      }
    }
  `);

  return (
    <Layout classes="bg-[#CED3DA]">
      <div className='flex gap-x-20 flex-wrap justify-center mx-20 pb-20'>
      {data.allSupabaseProject.nodes.map((item, index) => {
        return <Frame link={item.id} classes={`${index % 2 === 0 ? 'lg:mt-20' : ''} my-4`} title={item.title} body={item.techstack.map(item => <p>{item}</p>)} picture={item.picture} />
      })}
      </div>
    </Layout>
  )
}

export default Projects

export const Head = () => <title>Projects</title>