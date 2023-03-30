import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Title from '../../general/Title'

const SocialMedia = () => {
  return (
    <div className="mx-12 lg:mx-48 md:mx-32 text-[#00366f] select-none">
        <Title text="Social Media" />
        <div class="container mx-auto my-4 the-girl-next-door">
    <div class="grid-cols-3 space-y-2 lg:space-y-0 lg:grid lg:gap-6 lg:grid-rows">
        <div class="bg-[#FFEA79] -mt-2 -rotate-[2deg] max-w-[250px] h-[250px] p-2 shadow-md shadow-gray-600 relative">
        <StaticImage src={"../../../images/pin.png"} className="w-16 h-auto absolute z-[2000] right-4" />
            <p className='font-bold p-2 underline text-xl'>Address</p>
            <div className='flex justify-center'>
            <StaticImage src={"../../../images/neo-portfolio/address.png"}
                alt="image" className='m-2'/>
            </div>
            <p className='p-2 text-center'>New Westminster, CA</p>
        </div>
        <div class="bg-[#ebc1c9] -mt-2 rotate-[2deg] max-w-[250px] h-[250px] p-2 shadow-md shadow-gray-600 relative">
        <StaticImage src={"../../../images/pin.png"} className="w-16 h-auto absolute z-[2000] right-4" />
            <p className='font-bold p-2 underline text-xl'>Address</p>
            <div className='flex justify-center'>
            <StaticImage src={"../../../images/neo-portfolio/blog.png"}
                alt="image" className='m-2'/>
            </div>
            <p className='p-2 text-center'>medium.com/@shalaw.fatah</p>
        </div>
        <div class="bg-[#93E496] -mt-2 -rotate-[2deg] max-w-[250px] h-[250px] p-2 shadow-md shadow-gray-600 relative">
        <StaticImage src={"../../../images/pin.png"} className="w-16 h-auto absolute z-[2000] right-4" />
            <p className='font-bold p-2 underline text-xl'>Address</p>
            <div className='flex justify-center'>
            <StaticImage src={"../../../images/neo-portfolio/dribbble.png"}
                alt="image" className='m-2'/>
            </div>
            <p className='p-2 text-center'>dribbble.com/shalawfatah</p>
        </div>
        <div class="bg-[#B1D0FF] -mt-2 rotate-[2deg] max-w-[250px] h-[250px] p-2 shadow-md shadow-gray-600 relative">
        <StaticImage src={"../../../images/pin.png"} className="w-16 h-auto absolute z-[2000] right-4" />
            <p className='font-bold p-2 underline text-xl'>Address</p>
            <div className='flex justify-center'>
            <StaticImage src={"../../../images/neo-portfolio/email.png"}
                alt="image" className='m-2'/>
            </div>
            <p className='p-2 text-center'>Available on request</p>
        </div>
        <div class="bg-[#CED3DA] -mt-2  max-w-[250px] h-[250px] p-2 shadow-md shadow-gray-600 relative">
        <StaticImage src={"../../../images/pin.png"} className="w-16 h-auto absolute z-[2000] right-4" />
            <p className='font-bold p-2 underline text-xl'>Address</p>
            <div className='flex justify-center'>
            <StaticImage src={"../../../images/neo-portfolio/github.png"}
                alt="image" className='m-2'/>
            </div>
            <p className='p-2 text-center'>github.com/shalawfatah</p>
        </div>
        <div class="bg-[#FFC700] -mt-2 -rotate-[2deg] max-w-[250px] h-[250px] p-2 shadow-md shadow-gray-600 relative">
        <StaticImage src={"../../../images/pin.png"} className="w-16 h-auto absolute z-[2000] right-4" />
            <p className='font-bold p-2 underline text-xl'>Address</p>
            <div className='flex justify-center'>
            <StaticImage src={"../../../images/neo-portfolio/phone.png"}
                alt="image" className='m-2'/>
            </div>
            <p className='p-2 text-center'>Available on request</p>
        </div>
    </div>
</div>
</div>
  )
}

export default SocialMedia