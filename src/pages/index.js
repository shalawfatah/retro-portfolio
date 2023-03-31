import * as React from "react"
import Sticky from "../components/general/Sticky"
import Layout from "../components/layout/Layout"
import { StaticImage } from "gatsby-plugin-image"
import SocialMedia from "../components/pages/home/SocialMedia"
import Skills from "../components/pages/home/Skills"

const IndexPage = () => {

  return (
    <Layout classes={"bg-[#CED3DA]"}>
      <div className="flex flex-wrap justify-around relative container lg:my-48">
        <div className=" lg:relative md:relative">
          <Sticky text={"Fourth"} classes={'bg-[#CED3DA] -mt-2  -rotate-[12deg] absolute hidden lg:block'} />
          <Sticky text={"Second"} classes={'bg-[#B1D0FF] -mt-2  -rotate-[8deg] absolute hidden lg:block'} />
          <Sticky text={"Third"} classes={'bg-[#93E496] -mt-2  -rotate-[4deg] absolute hidden lg:block'} />
          <Sticky text={"I'm a web developer, focusing on frontend"} classes={'bg-[#FFEA79] lg:block lg:absolute z-96'} />
        </div>
        <div className="">
        <StaticImage src="../images/tea-leaf.png" alt="Tea" className="lg:w-[550px] w-[350px]" />
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
