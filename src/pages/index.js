import * as React from "react"
import Sticky from "../components/general/Sticky"
import Layout from "../components/layout/Layout"
import { StaticImage } from "gatsby-plugin-image"
import SocialMedia from "../components/pages/home/SocialMedia"
import Skills from "../components/pages/home/Skills"
import tea from '../images/sticky/000.png';
import Steam from "../components/general/Steam"
import { motion } from "framer-motion";

// HOME PAGE 

const IndexPage = () => {

  return (
    <Layout classes={"bg-[#CED3DA]"}>
      <div className="flex flex-wrap justify-around relative container lg:my-48">
        <div className="relative">
          <Sticky text={"Well, I love tea"} image={<img className="mx-auto my-auto h-20 pointer-events-none" src={tea} alt="tea" />} classes={'bg-[#CED3DA] -mt-2  -rotate-[12deg] absolute z-48'} />
          <Sticky text={"I have a great vision and greater implementation"} classes={'bg-[#B1D0FF] -mt-2  -rotate-[8deg] absolute  z-60'} />
          <Sticky text={"I use Javascript and React for almost everything"} classes={'bg-[#93E496] -mt-2  -rotate-[4deg] absolute z-64'} />
          <Sticky text={"I'm a web developer, focusing on frontend"} classes={'bg-[#FFEA79] lg:absolute z-96'} />
        </div>
        <motion.div 
            drag 
            dragConstraints={{left:0, right:0, top:0, bottom:0}}
            className="lg:-mt-40 cursor-grabbing"
            >
        <Steam />
        <StaticImage src="../images/tea-leaf.png" alt="Tea" className="lg:w-[550px] w-[350px] pointer-events-none" />
        </motion.div>
      </div>
      <div className="my-12">
        <Skills />
      </div>
      <div className="py-12 flex justify-center lg:block md:block xl:block">
        <SocialMedia />
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
