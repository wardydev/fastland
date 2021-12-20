import { Link } from 'gatsby'
import React from 'react'
import ButtonMd from '../../components/ButtonMd'

export default function Navbar() {
    return (
        <nav className='px-6 lg:px-10 py-4 w-full'>
            <main className='flex items-center justify-between'>
                <div className='flex items-center space-x-0 lg:space-x-16'>
                    <Link to="/">
                        <img src="/logo.svg" alt="" />
                    </Link>
                    <div className='hidden lg:flex space-x-4'>
                        <Link to='#' className='font-medium'>Services</Link>
                        <Link to='#' className='font-medium'>Features</Link>
                        <Link to='#' className='font-medium'>Pricing</Link>
                        <Link to='#' className='font-medium'>Contact</Link>
                    </div>
                </div>
                <div className='hidden lg:block'>
                    <button className='py-2 px-8 rounded-md font-medium'>Login</button>
                    <ButtonMd title="Get Started" />
                </div>
                <div className='block lg:hidden cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                </div>
            </main>
        </nav>
    )
}
