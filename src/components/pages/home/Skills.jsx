import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Title from '../../general/Title'

// COMMENT

const Skills = () => {
  return (
    <div className='mx-0 lg:mx-48 md:mx-32 the-girl-next-door text-[#00366f] select-none'>
        <Title text="Skills" />
        <div className='flex flex-wrap'>
          <div className='relative' >
            <StaticImage src={"../../../images/skills/paper4.webp"} className="max-w-96" />
            <div className='absolute lg:top-20 md:top-20 top-4 lg:mx-6 left-16 my-6'>
            <h2 className='text-xl underline'>Front-end</h2>
            <ul>
              <li>HTML, Semantic HTML, Accessibility</li>
              <li>CSS, Bootstrap, Tailwind, Sass</li>
              <li>JS, jQuery, React</li>
              <li>Redux, Jotai</li>
              <li>NextJS, GatsbyJS</li>
              <li>Vue, NuxtJS, VuePress</li>
              <li>JSX, Blade, Pug</li>
            </ul>
            </div>
          </div>
          <div className='relative'>
            <StaticImage src={"../../../images/skills/paper9.png"} className="max-w-96" />
            <div className='absolute lg:top-12 md:top-20 top-4 lg:mx-6 left-24 my-6'>
            <h2 className='text-xl underline'>Back-end</h2>
            <ul>
              <li>NodeJS, ExpressJS, Fastify</li>
              <li>PHP, WordPress CMS</li>
              <li>Python, Flask, Django</li>
              <li>Auth, Web Sockets</li>
              <li>MySQL, PostgreSQL</li>
              <li>MongoDB, Redis</li>
              <li>Prisma, TypeORM</li>
              <li>REST API, GraphQL</li>
            </ul>
            </div>
          </div>
          <div className='relative'>
            <StaticImage src={"../../../images/skills/paper1.png"} className="max-w-96" />
            <div className='absolute lg:top-20 md:top-20 top-4 left-24 lg:mx-6 my-6'>
            <h2 className='text-xl underline'>General</h2>
            <ul>
              <li>Git</li>
              <li>cPanel, DNS</li>
              <li>GIS, Geo-mapping</li>
              <li>Docker</li>
              <li>GCP, Digital Ocean</li>
            </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Skills