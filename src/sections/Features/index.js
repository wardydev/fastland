import React from 'react'
import ButtonMd from '../../components/ButtonMd'
import HeadingMd from '../../components/HeadingMd'
import HeadingSm from '../../components/HeadingSm'
import Paragraph from '../../components/Paragraph'
import ParagraphSm from '../../components/ParagraphSm'

export default function Features() {
    return (
        <section className="px-6 lg:px-40 py-16 lg:py-36 bg-blue-600">
            <main>
                <div className="w-full lg:w-3/5 mb-16 lg:mb-28">
                    <HeadingMd title="Best features available for your social marketing." light={true} column={true} />
                    <Paragraph title="Create custom landing pages with Fastland that converts more visitors than any website. Easy & Fast." light={true} />
                </div>
                <div className='flex flex-col lg:flex-row items-start space-x-0 lg:space-x-40'>
                    <div className='mb-16 lg:mb-0'>
                        <ButtonMd title="Analytics" light={true} />
                        <div className="mt-16">
                            <div className="flex items-center space-x-3 text-gray-200 font-medium mb-12">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                                </svg>

                                <span>Advertisement</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-200 font-medium">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                                </svg>

                                <span>Sale Report</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 items-start gap-x-5 lg:gap-x-10">
                        <div className='pr-0 lg:pr-16'>
                            <h2 className="text-5xl text-gray-100 text-opacity-30">01.</h2>
                            <div className="mt-16">
                                <div className="">
                                    <HeadingSm title="Real data access" light={true} />
                                    <ParagraphSm title="Create custom landing pages with Fastland that converts more visitors than any website." light={true} />
                                </div>
                            </div>
                        </div>
                        <div className='pr-0 lg:pr-16'>
                            <h2 className="text-5xl text-gray-100 text-opacity-30">02.</h2>
                            <div className="mt-16">
                                <div className="flex items-center space-x-3 text-gray-200 font-medium mb-12">
                                    <div className="">
                                        <HeadingSm title="Real data access" light={true} />
                                        <ParagraphSm title="Create custom landing pages with Fastland that converts more visitors than any website." light={true} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}
