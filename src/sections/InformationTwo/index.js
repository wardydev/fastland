import React from 'react'
import Img from 'gatsby-image'

import HeadingMd from '../../components/HeadingMd'
import Paragraph from '../../components/Paragraph'

export default function InformationTwo({image}) {
    return (
        <section className="px-40 pb-20">
            <main className='grid grid-cols-2 items-center gap-x-5'>
                <div>
                    <HeadingMd title="Save your extra money by using our service." column={true} />
                    <Paragraph title="Create custom landing pages with Fastland that converts more visitors than any website. Easy, Reliable & Fast." />
                </div>
                <div>
                    <Img fluid={image} className="w-full" />
                </div>
            </main>
        </section>
    )
}
