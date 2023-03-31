import React from 'react'
import { useStaticQuery } from 'gatsby'
import Layout from '../../components/layout/Layout'
import Paper from '../../components/pages/blog/Paper'
import { graphql } from 'gatsby'

const Blog = () => {
  const data = useStaticQuery(graphql`
  query blogQuery {
    allSupabaseBlog {
      nodes {
        link
        title
        excerpt
      }
    }
  }
`);

  return (
    <Layout classes="bg-[#CED3DA]">
      <div className='pb-20'>
      {data.allSupabaseBlog.nodes.map(item => {
        return <Paper link={item.link} title={item.title} excerpt={`${item.excerpt} ...`} />
      })}
      </div>
    </Layout>
  )
}

export default Blog

export const Head = () => <title>Blog</title>