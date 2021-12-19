import React from 'react'
import HeadingMd from '../../components/HeadingMd'
import Paragraph from '../../components/Paragraph'

export default function InformationOne() {
    return (
        <section className="px-40 pb-20 pt-40">
            <main className='grid grid-cols-2 items-center gap-x-5'>
                <div>
                    <img src="/information1.png" alt="information-1" className='w-full' />
                </div>
                <div>
                    <HeadingMd title="Get instant growth result for business." column={true} />
                    <Paragraph title="Create custom landing pages with Fastland that converts more visitors than any website. Easy, Reliable & Fast." />
                </div>
            </main>
        </section>
    )
}
