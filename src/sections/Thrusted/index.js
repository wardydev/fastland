import React from 'react'
import Paragraph from '../../components/Paragraph'

export default function Thrusted() {
    return (
        <section className="px-6 lg:px-40 py-20">
            <main className='flex flex-wrap lg:flex-nowrap items-center justify-center space-x-0 lg:space-x-36'>
                <div className='px-6 lg:px-0 pb-6 lg:pb-0'>
                    <h2 className="text-5xl text-blue-500 mb-4">1.5M</h2>
                    <Paragraph title="New visitors" />
                    <Paragraph title="every month." />
                </div>
                <div className='px-6 lg:px-0 pb-6 lg:pb-0'>
                    <h2 className="text-5xl text-red-500 mb-4">49%</h2>
                    <Paragraph title="Extra conversion " />
                    <Paragraph title="on any niche." />
                </div>
                <div className='px-6 lg:px-0 pb-6 lg:pb-0'>
                    <h2 className="text-5xl text-green-500 mb-4">$2M</h2>
                    <Paragraph title="Extra saved by" />
                    <Paragraph title="customers." />
                </div>
                <div className='px-6 lg:px-0 pb-6 lg:pb-0'>
                    <h2 className="text-5xl text-orange-500 mb-4">93%</h2>
                    <Paragraph title="Success rate on" />
                    <Paragraph title="last 05 years." />
                </div>
            </main>
        </section>
    )
}
