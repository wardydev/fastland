import React from 'react'
import Img from 'gatsby-image'
import {Link} from 'gatsby'

export default function Hero({image}) {
    return (
        <section className='px-6 lg:px-40 pt-10 lg:pt-20 pb-10 lg:pb-20'>
            <main className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <h1 className='text-5xl md:text-6xl lg:text-7xl mb-8 text-gray-900'>Stop waiting. Grow your <span className='underline underline-offset-0 text-orange-600'>business.</span> </h1>
                    <p className='text-lg lg:text-xl text-gray-700'>Create custom landing pages with Fastland that converts more visitors than any website.</p>
                    <form className="mt-12 mb-4 flex flex-col lg:flex-row items-center space-x-0 lg:space-x-2 space-y-2 lg:space-y-0">
                        <input type="text" className='py-4 px-4 rounded-lg w-full focus:outline-none border border-gray-300' placeholder='Enter Your Email' />
                        <button className='py-4 w-full lg:w-2/5 font-medium rounded-lg bg-purple-600 hover:bg-purple-700 text-white hover:text-gray-50'>Star For Free</button>
                    </form>
                    <p className='text-base text-gray-500'>By clicking the button, you are agreeing with our <Link className='text-orange-500'>Terms & Conditions.</Link></p>
                </div>
                <div className='relative mt-36 lg:mt-0'>
                    <Img fluid={image} className='w-full mx-auto lg:mx-0 absolute right-0 lg:-right-20 -top-16' />
                </div>
            </main>
        </section>
    )
}

// graphql


