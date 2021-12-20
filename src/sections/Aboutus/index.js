import React from 'react'
import HeadingMd from '../../components/HeadingMd'
import HeadingSm from '../../components/HeadingSm'
import Paragraph from '../../components/Paragraph'
import ParagraphSm from '../../components/ParagraphSm'

export default function Aboutus() {
    return (
        <section className="px-6 lg:px-40 py-20">
            <main>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-y-5 lg:gap-y-0 gap-x-0 lg:gap-x-12 mb-16 lg:mb-36">
                    <HeadingMd title="Your business needs a better shape today." />
                    <Paragraph title="Create custom landing pages with Fastland that converts more visitors than any website. Easy & Fast." />
                </div>
                <div className="px-12 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-x-0 lg:gap-x-10 gap-y-8 lg:gap-y-0">
                    <div className='lg:text-left text-center'>
                        <div className='mb-4'>
                            <img src="/icon1.svg" className='w-auto mx-auto lg:mx-0' alt="" />
                        </div>
                        <HeadingSm title="Manage Smartly" />
                        <ParagraphSm title="Stay on top of your task lists and stay in touch with what's happening" />
                    </div>
                    <div className='lg:text-left text-center'>
                        <div className='mb-4'>
                            <img src="/icon2.svg" className='w-auto mx-auto lg:mx-0' alt="" />
                        </div>
                        <HeadingSm title="Communicate Fast" />
                        <ParagraphSm title="Stay on top of your task lists and stay in touch with what's happening" />
                    </div>
                    <div className='lg:text-left text-center'>
                        <div className='mb-4'>
                            <img src="/icon3.svg" className='w-auto mx-auto lg:mx-0' alt="" />
                        </div>
                        <HeadingSm title="Influence Easily" />
                        <ParagraphSm title="Stay on top of your task lists and stay in touch with what's happening" />
                    </div>
                </div>
            </main>
        </section>
    )
}
