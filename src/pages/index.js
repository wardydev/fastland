import React from 'react'

// sections
import Aboutus from '../sections/Aboutus'
import Features from '../sections/Features'
import Footer from '../sections/Footer'
import Hero from '../sections/Hero'
import InformationOne from '../sections/InformationOne'
import InformationTwo from '../sections/InformationTwo'
import Navbar from '../sections/Navbar'
import Newsletter from '../sections/Newsletter'
import Testimonials from '../sections/Testimonials'
import Thrusted from '../sections/Thrusted'

export default function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <Aboutus />
      <Features />
      <InformationOne />
      <InformationTwo />
      <Testimonials />
      <Thrusted />
      <Newsletter />
      <Footer />
    </>
  )
}
