import React from 'react'
import { graphql } from 'gatsby'


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
import Helmet from 'react-helmet'

export default function Home({data}) {
  const heroImage = data.hero.childImageSharp.fluid
  const informationOneImage = data.informationOne.childImageSharp.fluid
  const informationTwoImage = data.informationTwo.childImageSharp.fluid

  return (
    <>
      <Helmet>
        <meta charset={data.siteMetadata.siteMetadata.charset}/>
        <meta name="Description" CONTENT={data.siteMetadata.siteMetadata.description}/>
        <meta name="keyword" CONTENT={data.siteMetadata.siteMetadata.keyword}/>
        <meta name="google-site-verification" content={data.siteMetadata.siteMetadata.googleSiteVerification}/>
        <meta property="og:title" content={data.siteMetadata.siteMetadata.title} />
        <title>{data.siteMetadata.siteMetadata.title}</title>
        <meta name="robots" content={data.siteMetadata.siteMetadata.robots}/>
      </Helmet>

      <Navbar />
      <Hero image={heroImage} />
      <Aboutus />
      <Features />
      <InformationOne image={informationOneImage} />
      <InformationTwo image={informationTwoImage} />
      <Testimonials />
      <Thrusted />
      <Newsletter />
      <Footer />
    </>
  )
}

// graphql
export const query = graphql`
  query MyQuery {
    hero: file(relativePath: {eq: "hero-image.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    informationOne: file(relativePath: {eq: "information1.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    informationTwo: file(relativePath: {eq: "information2.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    siteMetadata: site {
      siteMetadata {
        author
        charset
        description
        googleSiteVerification
        keyword
        robots
        title
      }
    }
  }
`