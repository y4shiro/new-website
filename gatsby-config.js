module.exports = {
  siteMetadata: {
    siteUrl: 'https://y4shiro.net',
    title: "y4shiro's Portforio",
    description: 'y4shiro のポートフォリオページです',
    titleTemplate: '%s | y4shiro.net',
  },
  plugins: [
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-76076401-1',
      },
    },
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    'gatsby-plugin-root-import',
    `gatsby-plugin-react-helmet`,
  ],
};
