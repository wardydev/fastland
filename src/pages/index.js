import React from 'react'
import { graphql } from 'gatsby'

export default function Home({data}) {
  console.log(data)
  const {author, title} = data.site.siteMetadata
  return (
    <div className='bg-red-500'>
      <h1>{author}</h1>
      <p>{title}</p>
    </div>
  )
}

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        author
        description
        siteUrl
        title
      }
    }
  }
`
