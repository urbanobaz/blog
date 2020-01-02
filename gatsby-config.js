module.exports = {
  siteMetadata: {
    title: '100 Days of Gatsby Blog',
    author: 'Urbano'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark'
  ]

}
