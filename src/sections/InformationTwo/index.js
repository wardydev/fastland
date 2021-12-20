import React from 'react'
import Img from 'gatsby-image'

import HeadingMd from '../../components/HeadingMd'
import Paragraph from '../../components/Paragraph'

export default function InformationTwo({image}) {
    return (
        <section className="px-12 lg:px-40 pb-16 lg:pb-20">
            <main className='grid grid-cols-1 lg:grid-cols-2 items-center gap-x-0 lg:gap-x-5'>
                <div className='order-2 lg:order-1'>
                    <HeadingMd title="Save your extra money by using our service." column={true} />
                    <Paragraph title="Create custom landing pages with Fastland that converts more visitors than any website. Easy, Reliable & Fast." />
                </div>
                <div className='order-1 lg:order-2'>
                    <Img fluid={image} className="w-full mx-auto lg:mx-0" />
                </div>
            </main>
        </section>
    )
}
