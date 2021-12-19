import { Link } from 'gatsby'
import React from 'react'
import ButtonMd from '../../components/ButtonMd'

export default function Navbar() {
    return (
        <nav className='px-10 py-4'>
            <main className='flex items-center justify-between'>
                <div className='flex items-center space-x-16'>
                    <Link to="/">
                        <img src="/logo.svg" alt="" />
                    </Link>
                    <div className='flex space-x-4'>
                        <Link to='#' className='font-medium'>Services</Link>
                        <Link to='#' className='font-medium'>Features</Link>
                        <Link to='#' className='font-medium'>Pricing</Link>
                        <Link to='#' className='font-medium'>Contact</Link>
                    </div>
                </div>
                <div>
                    <button className='py-2 px-8 rounded-md font-medium'>Login</button>
                    <ButtonMd title="Get Started" />
                </div>
            </main>
        </nav>
    )
}
