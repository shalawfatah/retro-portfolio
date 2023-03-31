import * as React from "react"
import Sticky from "../components/general/Sticky"
import Layout from "../components/layout/Layout"
import { StaticImage } from "gatsby-plugin-image"
import SocialMedia from "../components/pages/home/SocialMedia"
import Skills from "../components/pages/home/Skills"

const IndexPage = () => {

  return (
    <Layout classes={"bg-[#CED3DA]"}>
      <div className="flex lg:justify-around flex-wrap lg:my-32 my-6 p-6 relative container">
        <div className="mb-60 lg:mb-0 md:mb-0">
          <Sticky text={"Fourth"} classes={'bg-[#CED3DA] -mt-2 -rotate-[8deg] absolute '} />
          <Sticky text={"Second"} classes={'bg-[#B1D0FF] -mt-2 -rotate-[6deg] absolute '} />
          <Sticky text={"Third"} classes={'bg-[#93E496] -mt-2 -rotate-[4deg] absolute '} />
          <Sticky text={"I'm a web developer, focusing on frontend"} classes={'bg-[#FFEA79] absolute'} />
        </div>
        <div className="lg:block md:block xl:block hidden">
        <StaticImage src="../images/tea-leaf.png" alt="Tea" className="w-[450px]" />
        </div>
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
