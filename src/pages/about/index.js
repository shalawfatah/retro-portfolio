import React from 'react'
import Layout from '../../components/layout/Layout'
import Note from '../../components/pages/about/Note'

const About = () => {
  return (
    <Layout classes={'bg-[#F5F5F5]'}>
      <Note title="Article title" body={"Article body"} />
    </Layout>
  )
}

export default About