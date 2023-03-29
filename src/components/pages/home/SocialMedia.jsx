import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Title from '../../general/Title'


const SocialMedia = () => {
  return (
    <div className="mx-12 lg:mx-48 md:mx-32">
        <Title text="Social Media" />
        <div class="container mx-auto">
    <div class="grid-cols-3 p-20 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
        <div class="w-full text-center">
            <StaticImage src={"../../../images/neo-portfolio/address.png"}
                alt="image" />
        </div>
        <div class="w-full col-span-2 row-span-2">
            <StaticImage src={"../../../images/neo-portfolio/blog.png"}
                alt="image" />
        </div>
        <div class="w-full text-right">
            <StaticImage src={"../../../images/neo-portfolio/dribbble.png"}
                alt="image" />
        </div>
        <div class="w-full">
            <StaticImage src={"../../../images/neo-portfolio/email.png"}
                alt="image" />
        </div>
        <div class="w-full">
            <StaticImage src={"../../../images/neo-portfolio/github.png"}
                alt="image" />
        </div>
        <div class="w-full text-left">
            <StaticImage src={"../../../images/neo-portfolio/phone.png"}
                alt="image" />
        </div>
    </div>
</div>
</div>
  )
}

export default SocialMedia