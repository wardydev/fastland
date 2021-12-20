import React from 'react'
import Img from 'gatsby-image'

import HeadingMd from '../../components/HeadingMd'
import Paragraph from '../../components/Paragraph'

export default function InformationOne({image}) {
    return (
        <section className="px-12 lg:px-40 pb-16 lg:pb-20 pt-16 lg:pt-40">
            <main className='grid grid-cols-1 lg:grid-cols-2 items-center gap-x-0 lg:gap-x-5'>
                <div>
                    <Img fluid={image} className="w-full mx-auto lg:mx-0" />
                </div>
                <div>
                    <HeadingMd title="Get instant growth result for business." column={true} />
                    <Paragraph title="Create custom landing pages with Fastland that converts more visitors than any website. Easy, Reliable & Fast." />
                </div>
            </main>
        </section>
    )
}
