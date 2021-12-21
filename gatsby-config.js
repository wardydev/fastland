module.exports = {
  siteMetadata: {
    title: `Fastlands | Landing page maker and web converter`,
    description: `Create custom landing pages with Fastland that converts more visitors than any website.`,
    author: `wardydev`,
    keyword: `landing page, convert website, web design, convert web to html`,
    charset: `utf-8`,
    googleSiteVerification: `+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34=`,
    robots: `noindex,nofollow`

  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fastlands`,
        short_name: `Fastlands`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    'gatsby-plugin-postcss',
  ],
}
