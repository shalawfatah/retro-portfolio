import React from 'react'
import Frame from '../../components/general/Frame'
import Layout from '../../components/layout/Layout'
import tea from '../../images/smoke03.gif';

const Projects = () => {
  return (
    <Layout>
      <div className='flex gap-x-20 flex-wrap justify-center mx-20'>
      <Frame classes={'lg:mt-20'} title="Project 1" body={"This is a great project"} picture={tea} />
      <Frame title="Project 2" body={"This is a great project"} picture={tea} />
      <Frame classes={'lg:mt-32'} title="Project unique" body={"This is a great project"} picture={tea} />
      <Frame classes={'lg:-mt-12'} title="Project 1" body={"This is a great project"} picture={tea} />
      <Frame classes={'lg:mt-20'} title="Project 1" body={"This is a great project"} picture={tea} />
      </div>
    </Layout>
  )
}

export default Projects