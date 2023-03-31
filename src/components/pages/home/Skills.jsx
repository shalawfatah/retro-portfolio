import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Title from '../../general/Title'
import paper1 from '../../../images/skills/paper4.webp';
import paper2 from "../../../images/skills/paper9.png";
import paper3 from "../../../images/skills/paper1.png";

const Skills = () => {
  return (
    <div className='mx-12 lg:mx-48 md:mx-32  text-[#00366f] select-none'>
        <Title text="Skills" />
        <div className='flex flex-wrap justify-around the-girl-next-door'>
          <div className='bg-cover p-20' style={{ backgroundImage: `url(${paper1})` }} >
            <div>
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
          <div className='bg-cover py-16 px-24' style={{ backgroundImage: `url(${paper2})` }}>
            <div className=''>
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
          <div className='bg-cover p-24' style={{ backgroundImage: `url(${paper3})` }}>
            <div className=''>
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