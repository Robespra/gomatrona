module.exports = {
  // pathPrefix: "/uxpages",
  siteMetadata: {
    title: 'uxpages',
    description: 'uxpages',
    siteUrl: 'https://uxpages.com/',
  },
  plugins: [
    // Shortcut for adding plugins without options.
    `gatsby-plugin-postcss`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-page-transitions',
  ],
}
