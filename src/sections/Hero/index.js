import React from 'react'

export default function Hero() {
    return (
        <section className='px-40 py-20'>
            <main className="grid grid-cols-2">
                <div>
                    <h1 className='text-7xl mb-8'>Stop waiting. Grow your <span className='underline underline-offset-0 text-orange-600'>business.</span> </h1>
                    <p className='text-xl text-gray-700'>Create custom landing pages with Fastland that converts more visitors than any website.</p>
                    <form className="mt-12 mb-4 flex items-center space-x-2">
                        <input type="text" className='py-4 px-4 rounded-lg w-full focus:outline-none border border-gray-300' placeholder='Enter Your Email' />
                        <button className='py-4 w-2/5 font-medium rounded-lg bg-purple-600 hover:bg-purple-700 text-white hover:text-gray-50'>Star For Free</button>
                    </form>
                    <p className='text-base text-gray-500'>By clicking the button, you are agreeing with our <a href="#" className='text-orange-500'>Terms & Conditions.</a></p>
                </div>
                <div className='relative'>
                    <img src="/hero-image.png" className='w-full absolute -right-20 -top-16' alt="" />
                </div>
            </main>
        </section>
    )
}
