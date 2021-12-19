import React from 'react'
import HeadingMd from '../../components/HeadingMd'
import HeadingSm from '../../components/HeadingSm'
import Paragraph from '../../components/Paragraph'
import ParagraphSm from '../../components/ParagraphSm'

export default function Aboutus() {
    return (
        <section className="px-40 py-20">
            <main>
                <div className="grid grid-cols-2 items-center gap-x-12 mb-36">
                    <HeadingMd title="Your business needs a better shape today." />
                    <Paragraph title="Create custom landing pages with Fastland that converts more visitors than any website. Easy & Fast." />
                </div>
                <div className="grid grid-cols-3 items-center gap-x-10">
                    <div>
                        <div className='mb-4'>
                            <img src="/icon1.svg" alt="" />
                        </div>
                        <HeadingSm title="Manage Smartly" />
                        <ParagraphSm title="Stay on top of your task lists and stay in touch with what's happening" />
                    </div>
                    <div>
                        <div className='mb-4'>
                            <img src="/icon2.svg" alt="" />
                        </div>
                        <HeadingSm title="Communicate Fast" />
                        <ParagraphSm title="Stay on top of your task lists and stay in touch with what's happening" />
                    </div>
                    <div>
                        <div className='mb-4'>
                            <img src="/icon3.svg" alt="" />
                        </div>
                        <HeadingSm title="Influence Easily" />
                        <ParagraphSm title="Stay on top of your task lists and stay in touch with what's happening" />
                    </div>
                </div>
            </main>
        </section>
    )
}
