import React from 'react'
import HeadingMd from '../../components/HeadingMd'

export default function Newsletter() {
    return (
        <section className="px-6 lg:px-40 py-16 lg:py-20 bg-purple-700">
            <main>
                <div className="w-full lg:justify-startw-2/4 mx-auto text-center">
                    <HeadingMd title="It’s easy to get started. Start now." light={true} />
                </div>
                <form className="mt-12 mb-4 flex flex-col lg:flex-row items-center space-x-0 lg:space-x-2 space-y-2 lg:space-y-0 w-full lg:w-2/4 mx-auto">
                    <input type="text" className='py-4 px-4 rounded-lg focus:outline-none w-full bg-white bg-opacity-30 text-white' placeholder='Enter Your Email' />
                    <button className='py-4 px-8 w-full lg:w-2/5 font-medium rounded-lg bg-orange-500 hover:bg-orange-600 text-white hover:text-gray-50'>Star For Free</button>
                </form>
            </main>
        </section>
    )
}
