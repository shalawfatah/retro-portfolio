import * as React from "react"
import Sticky from "../components/general/Sticky"
import Layout from "../components/layout/Layout"
import { StaticImage } from "gatsby-plugin-image"
import SocialMedia from "../components/pages/home/SocialMedia"
import Skills from "../components/pages/home/Skills"

const IndexPage = () => {

  return (
    <Layout>
      <div className="flex justify-around my-32 p-6 relative container">
        <div className="">
          <Sticky text={"Fourth"} classes={'bg-[#CED3DA] -mt-2 -rotate-[8deg] absolute '} />
          <Sticky text={"Second"} classes={'bg-[#B1D0FF] -mt-2 -rotate-[6deg] absolute '} />
          <Sticky text={"Third"} classes={'bg-[#93E496] -mt-2 -rotate-[4deg] absolute '} />
          <Sticky text={"First"} classes={'bg-[#FFEA79] absolute'} />
        </div>
        <div>
        <StaticImage src="../images/tea-leaf.png" alt="Tea" className="w-[500px]" />
        </div>
      </div>
      <SocialMedia />
      <Skills />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
